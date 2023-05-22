// Utilities
import { db } from '@/plugins/firebase'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { defineStore } from 'pinia'
import { useAppStore } from './app'

const app = useAppStore()

export const useGelleryStore = defineStore('gellery', {
    state: () => ({
        dialog: false,
        image: [],
        loading: false,
        gallery: []
    }),

    actions: {
        saveImage() {
            if (this.image >= 1) return

            const files = this.image

            const storage = getStorage()

            const uploadImage = file => {

                let link = `gallery/${file.name}`

                const storageRef = ref(storage, link)

                const uploadTask = uploadBytesResumable(storageRef, file)

                // this.loading = true

                uploadTask.on('state_changed', snapshot => { }, error => { },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then(async downloadURL => {
                                await addDoc(collection(db, 'gallery'), {
                                    image: downloadURL,
                                    imageLink: uploadTask.snapshot.ref.fullPath,
                                    createdAt: serverTimestamp()
                                })

                                // this.loading = false
                                this.dialog = false

                                // app.snackbar = true
                                // app.snackColor = 'green'
                                // app.snackText = 'Image saved successfully'
                            })
                    })
            }

            files.forEach(file => {
                uploadImage(file)
                // console.log('file: ', file)
            })
        },

        getGalleryImages() {
            const q = query(collection(db, "gallery"), orderBy('createdAt', 'asc'));

            const unsubscribe = onSnapshot(q, querySnapshot => {
                this.gallery = []
                querySnapshot.forEach((doc) => {
                    this.gallery.unshift({
                        id: doc.id,
                        ...doc.data()
                    })
                });
            });

            return unsubscribe
        }
    }
})
