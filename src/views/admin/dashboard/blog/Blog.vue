<template>
  <v-container>
    <v-card width="600" class="mx-auto">
      <v-img :src="blog?.image" cover>
        <v-btn @click="openInput" :disabled="disableImageButton" :loading="imageButtonLoading" position="absolute"
          location="bottom right" class="ma-4 text-capitalize" rounded="pill">
          <v-icon class="mr-2">mdi-pencil</v-icon>
          Edit Image
        </v-btn>
        <input @change="setImage" type="file" id="fileInput" style="display: none;" />
      </v-img>

      <v-card-title>
        {{ blog?.caption }}
        <v-btn icon size="small" class="ml-4" flat>
          <v-icon> mdi-pencil </v-icon>

          <v-dialog v-model="captionDialog" activator="parent" width="300">
            <v-card>
              <v-card-title>Edit caption</v-card-title>
              <v-card-text>
                <v-text-field label="Caption" variant="underlined" v-model="newBlog.caption" />
              </v-card-text>
              <v-card-actions>
                <v-btn @click="captionDialog = false" style="flex: 1;" class="text-capitalize">Cancel</v-btn>
                <v-btn @click="editCaption" :loading="captionLoading" style="flex: 1;"
                  class="bg-blue text-capitalize">Save Caption</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-chip size="small">
          <span>{{ new Date(blog?.createdAt.seconds).toDateString() }}</span>
        </v-chip>
      </v-card-text>
      <v-card-text>
        <v-btn icon size="small" class="mr-4" flat>
          <v-icon> mdi-pencil </v-icon>

          <v-dialog v-model="postDialog" activator="parent" width="300">
            <v-card>
              <v-card-title>Edit post</v-card-title>
              <v-card-text>
                <v-textarea rows="2" max-rows="8" no-resize label="Post" variant="underlined" v-model="newBlog.post" />
              </v-card-text>
              <v-card-actions>
                <v-btn @click="postDialog = false" style="flex: 1;" class="text-capitalize">Cancel</v-btn>
                <v-btn @click="editPost" :loading="postLoading" style="flex: 1;" class="bg-blue text-capitalize">Save
                  Post</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
        {{ blog?.post }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '@/plugins/firebase';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
export default {
  data: () => ({
    blog: null,
    captionDialog: false,
    captionLoading: false,
    postDialog: false,
    postLoading: false,
    disableImageButton: false,
    imageButtonLoading: false,
    image: null,
    newBlog: {
      caption: '',
      post: ''
    }
  }),

  mounted() {
    this.getBlog(this.$route.params.id)
  },

  methods: {
    getBlog(id) {
      const unsub = onSnapshot(doc(db, "posts", id), (doc) => {
        let data = doc.data()

        this.blog = data

        this.newBlog = {
          caption: data.caption,
          post: data.post
        }
      })

      return unsub
    },

    async editCaption() {
      this.captionLoading = true

      await updateDoc(doc(db, 'posts', this.$route.params.id), {
        caption: this.newBlog.caption
      })

      this.captionLoading = false
      this.captionDialog = false
    },

    async editPost() {
      this.postLoading = true

      await updateDoc(doc(db, 'posts', this.$route.params.id), {
        post: this.newBlog.post
      })

      this.postLoading = false
      this.postDialog = false
    },

    openInput() {
      document.querySelector('#fileInput').click()
    },

    setImage(e) {
      let file = e.target.files[0]

      if (!file) return

      this.imageButtonLoading = true
      this.disableImageButton = true

      const storage = getStorage()

      let link = `posts/${file.name}`

      const storageRef = ref(storage, link)

      const uploadTask = uploadBytesResumable(storageRef, file)

      const upload = () => {
        uploadTask.on('state_changed', snapshot => { },
          error => { },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then(async downloadURL => {
                await updateDoc(doc(db, 'posts', this.$route.params.id), {
                  image: downloadURL,
                  imageLink: uploadTask.snapshot.ref.fullPath
                })

                this.imageButtonLoading = false
                this.disableImageButton = false
              })
          })
      }

      if (this.blog.image == undefined || this.blog.image == null) {
        upload()
      } else {
        const imageRef = ref(storage, this.blog.imageLink)

        deleteObject(imageRef)
          .then(() => {
            upload()
          }).catch(error => {
            console.log(error)
          })
      }
    }
  }
}
</script>
