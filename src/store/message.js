// Utilities
import { defineStore } from 'pinia'

import { useAppStore } from './app'

const app = useAppStore()

import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/plugins/firebase'

export const useMessageStore = defineStore('message', {
    state: () => ({
        name: '',
        email: '',
        subject: '',
        message: '',
        loading: false
    }),

    actions: {
        async sendMessage() {
            if (this.name == '' || this.email == '' || this.message == '') return
            this.loading = true

            await addDoc(collection(db, 'messages'), {
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message
            })

            this.loading = false

            app.snackbar = true
            app.snackText = 'Message sent successfully'
            app.snackColor = 'green'
        }
    }
})
