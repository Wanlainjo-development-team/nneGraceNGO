// Utilities
import { defineStore } from 'pinia'

import { useAppStore } from './app'

const app = useAppStore()

import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db } from '@/plugins/firebase'

export const useMessageStore = defineStore('message', {
    state: () => ({
        name: '',
        email: '',
        subject: '',
        message: '',
        loading: false,
        messages: []
    }),

    actions: {
        async sendMessage() {
            if (this.name == '' || this.email == '' || this.message == '') return
            this.loading = true

            await addDoc(collection(db, 'messages'), {
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message,
                read: false,
                createdAt: serverTimestamp()
            })

            this.loading = false

            app.snackbar = true
            app.snackText = 'Message sent successfully'
            app.snackColor = 'green'
        },

        getMessages() {
            const q = query(collection(db, "messages"));

            const unsubscribe = onSnapshot(q, querySnapshot => {
                this.messages = []
                querySnapshot.forEach((doc) => {
                    this.messages.unshift({
                        id: doc.id,
                        ...doc.data()
                    })
                });
            });

            return unsubscribe
        }
    }
})
