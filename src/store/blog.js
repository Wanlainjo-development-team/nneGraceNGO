// Utilities
import { defineStore } from 'pinia'
import { auth, db } from '@/plugins/firebase'
import { addDoc, collection, doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore'
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
        blog: [
            {
                id: 1,
                image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885245/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.13dqwdqwqw_rz2ypo.jpg',
                title: '10 Tips for Writing Better Blog Posts',
                name: 'John Doe',
                datePosted: '2022-01-01',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultricies orci, vel facilisis enim gravida ac. Proin faucibus tellus vel orci bibendum, sed venenatis lorem varius.'
            },
            {
                id: 2,
                image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885252/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.24099_q3d2xt.jpg',
                title: 'Why You Should Travel More Often',
                name: 'Jane Smith',
                datePosted: '2022-02-15',
                body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed interdum tortor et arcu commodo, vel placerat metus consectetur. Sed consequat erat nec justo varius, eget eleifend nisi placerat.'
            },
            {
                id: 3,
                image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885251/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.2734_g8svzx.jpg',
                title: 'The Benefits of Yoga for Mental Health',
                name: 'Mike Johnson',
                datePosted: '2022-03-22',
                body: 'Nunc iaculis tortor eget justo interdum, quis scelerisque ipsum dictum. Nulla a dolor mauris. Donec sit amet dolor ipsum. Fusce ultricies mauris quis urna posuere bibendum.'
            },
            {
                id: 4,
                image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885250/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.2712_gi1ccu.jpg',
                title: 'How to Make the Perfect Cup of Coffee',
                name: 'Sarah Lee',
                datePosted: '2022-04-05',
                body: 'Suspendisse dictum, lectus eget feugiat lacinia, metus libero aliquam mauris, vel feugiat ipsum mauris vel est. Ut consectetur tincidunt tellus sit amet tincidunt. Pellentesque in urna ac sapien semper tincidunt.'
            }
        ]
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
        }
    }
})
