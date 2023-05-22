<template>
  <v-container class="mb-16">
    <v-card width="600" class="mx-auto" flat>
      <v-img :src="blog?.image" cover />

      <v-card-title> {{ blog?.caption }} </v-card-title>
      <v-card-text>
        <v-chip size="small">
          <span>{{ new Date(blog?.createdAt.seconds).toDateString() }}</span>
        </v-chip>
      </v-card-text>
      <v-card-text> {{ blog?.post }} </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/plugins/firebase';
export default {
  data: () => ({
    blog: null
  }),

  mounted() {
    this.getBlog(this.$route.params.id)
  },

  methods: {
    getBlog(id) {
      const unsub = onSnapshot(doc(db, "posts", id), (doc) => {
        let data = doc.data()

        this.blog = data
      })

      return unsub
    }
  }
}
</script>
