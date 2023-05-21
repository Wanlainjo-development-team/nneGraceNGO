// Utilities
import { defineStore } from 'pinia'
import { auth, db } from '@/plugins/firebase'
import { addDoc, collection, doc, onSnapshot, query, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage"
import { useAppStore } from './app'

const app = useAppStore()

export const useBlogStore = defineStore('blog', {
    state: () => ({
        dialog: false,
        image: null,
        caption: '',
        post: '',
        loading: false,
        blog: []
    }),

    actions: {
        savePost() {
            if (!this.image || this.caption == '' || this.post == '') return

            let file = this.image

            const storage = getStorage()

            let link = `posts/${this.image.name}`

            const storageRef = ref(storage, link)

            const uploadTask = uploadBytesResumable(storageRef, file)

            this.loading = true

            uploadTask.on('state_changed', snapshot => { }, error => { },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(async downloadURL => {
                            await addDoc(collection(db, 'posts'), {
                                image: downloadURL,
                                imageLink: uploadTask.snapshot.ref.fullPath,
                                caption: this.caption,
                                post: this.post,
                                createdAt: serverTimestamp()
                            })

                            this.loading = false
                            this.dialog = false

                            app.snackbar = true
                            app.snackColor = 'green'
                            app.snackText = 'Post saved successfully'
                        })
                })
        },

        getBlogPosts() {
            const q = query(collection(db, "posts"));

            const unsubscribe = onSnapshot(q, querySnapshot => {
                // this.blog = [...this.blog, doc.docs]
                querySnapshot.forEach((doc) => {
                    this.blog.unshift({
                        id: doc.id,
                        ...doc.data()
                    })
                    // this.blog.push({
                    //     id: doc.id,
                    //     ...doc
                    // });
                });
                console.log("Current cities in CA: ", [...this.blog]);
            });

            return unsubscribe
        }
    }
})
