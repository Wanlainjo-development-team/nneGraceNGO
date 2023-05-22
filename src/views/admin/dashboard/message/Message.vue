<template>
  <v-container>
    <v-card width="700" class="mx-auto" flat>
      <v-toolbar rounded="lg">
        <v-toolbar-title class="text-body-1">{{ message?.name }} <span @click="openPage(message?.email)"
            style="cursor: pointer;" class="text-caption text-decoration-underline">{{
              message?.email }}</span></v-toolbar-title>

        <v-spacer />

        <span class="text-caption mr-2">{{ new Date(message?.createdAt.seconds).toDateString() }}</span>
      </v-toolbar>

      <v-card-text>{{ message?.message }}</v-card-text>

      <v-card-actions>
        <v-btn @click="openPage(message?.email)" class="text-capitalize">
          <v-icon class="mr-2">mdi-reply</v-icon>
          Reply message
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '@/plugins/firebase'
export default {
  data: () => ({
    message: null
  }),

  mounted() {
    this.getMessage(this.$route.params.id)
    this.updateMessage(this.$route.params.id)
  },

  methods: {
    getMessage(id) {
      const unsub = onSnapshot(doc(db, "messages", id), (doc) => {
        let data = doc.data()

        this.message = data
      })

      return unsub
    },

    updateMessage(id) {
      updateDoc(doc(db, 'messages', id), { read: true })
    },

    openPage(email) {
      window.open(`mailto:${email}`)
    }
  }
}
</script>
