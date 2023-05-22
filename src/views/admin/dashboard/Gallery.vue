<template>
  <v-container fluid>
    <v-sheet v-if="galleries.gallery < 1" class="d-flex flex-column align-center justify-center" height="80vh">
      <v-icon size="100" color="grey-darken-2">mdi-dropbox</v-icon>
      <span class="text-grey-darken-3">You dont have any image yet</span>
    </v-sheet>
    <v-row v-else>
      <v-col v-for="gallery in galleries.gallery" :key="gallery.id" cols="12" sm="6" md="4">
        <v-card @click="setActiveDialog(gallery)" rounded="lg">
          <v-img :src="gallery?.image" aspect-ratio="1.5" cover />
        </v-card>
      </v-col>
    </v-row>

    <v-btn color="blue" position="fixed" location="bottom right" rounded="pill" class="text-capitalize ma-4" size="large">
      <v-icon size="x-large" class="mr-2">mdi-plus</v-icon>
      <span>Add image</span>

      <v-dialog v-model="galleries.dialog" activator="parent" width="400">
        <v-card>
          <v-toolbar density="compact" color="transparent">
            <v-toolbar-title class="text-body-1">Add new image</v-toolbar-title>
            <v-spacer />
            <v-btn @click="galleries.dialog = false" icon size="small">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-file-input @change="setImage" label="Select images" color="blue" variant="underlined" multiple />
          </v-card-text>

          <v-card-actions>
            <v-btn @click="galleries.saveImage" :loading="galleries.loading" block class="bg-blue">Save image</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </v-container>

  <v-dialog v-model="activeDialog.active" width="600">
    <v-card rounded="lg">
      <v-img :src="activeDialog?.image" cover />
      <input @change="saveImage" type="file" id="gallerImageFile" style="display: none;">
      <v-card-actions>
        <v-btn @click="deleteBlog" :loading="deleteButtonLoading" color="red" class="text-capitalize">Delete</v-btn>
        <v-btn @click="clickInput" :loading="editButtonLoading" class="bg-blue text-capitalize">Edit</v-btn>
        <v-spacer />
        <v-btn @click="activeDialog.active = false" class="text-capitalize">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { db } from "@/plugins/firebase";
import { useGelleryStore } from "@/store/gellery";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { ref as vRef } from "vue";

const galleries = vRef(useGelleryStore())

let editButtonLoading = vRef(false)
let deleteButtonLoading = vRef(false)

let activeDialog = vRef({
  active: false
})

const setImage = e => {
  let file = e.target.files
  if (!file) return

  galleries.value.image = [...file]
}

const setActiveDialog = prop => {
  activeDialog.value = {
    active: true,
    ...prop
  }
}

const clickInput = () => {
  document.querySelector('#gallerImageFile').click()
}

const saveImage = e => {
  let file = e.target.files[0]

  if (!file) return

  editButtonLoading.value = true

  const storage = getStorage()

  let link = `gallery/${file.name}`

  const storageRef = ref(storage, link)

  const uploadTask = uploadBytesResumable(storageRef, file)

  const upload = () => {
    uploadTask.on('state_changed', snapshot => { },
      error => { },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(async downloadURL => {
            await updateDoc(doc(db, 'gallery', activeDialog.value.id), {
              image: downloadURL,
              imageLink: uploadTask.snapshot.ref.fullPath
            })

            editButtonLoading.value = false
            activeDialog.value.active = false
          })
      })
  }

  if (activeDialog.value.image == undefined || activeDialog.value.image == null) {
    upload()
  } else {
    const imageRef = ref(storage, activeDialog.value.imageLink)

    deleteObject(imageRef)
      .then(() => {
        upload()
      }).catch(error => {
        console.log(error)
      })
  }
}

const deleteBlog = () => {
  deleteButtonLoading.value = true
  const storage = getStorage()
  deleteObject(ref(storage, activeDialog.value.imageLink))
    .then(async () => {
      await deleteDoc(doc(db, 'gallery', activeDialog.value.id))
      deleteButtonLoading.value = false
      activeDialog.value.active = false
    }).catch(async () => {
      await deleteDoc(doc(db, 'gallery', activeDialog.value.id))
      deleteButtonLoading.value = false
      activeDialog.value.active = false
    })
}
</script>
