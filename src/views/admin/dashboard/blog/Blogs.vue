<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-sheet color="blue" width="100%" min-height="200" height="100%" rounded="lg" style="cursor: pointer;"
          class="d-flex flex-column justify-center align-center">
          <v-icon size="x-large">mdi-plus</v-icon>
          <span>Add new blog post</span>

          <v-dialog v-model="blogs.dialog" activator="parent" width="400">
            <v-card>
              <v-toolbar density="compact" color="transparent">
                <v-toolbar-title class="text-body-1 font-weight-bold">Add new post</v-toolbar-title>
                <v-spacer />
                <v-btn @click="blogs.dialog = false" icon size="small">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-file-input @change="setImage" label="Image" color="blue" variant="underlined" />
                <v-text-field v-model="blogs.caption" label="Caption" color="blue" variant="underlined" />
                <v-textarea v-model="blogs.post" label="Post" rows="2" max-rows="8" auto-grow color="blue"
                  variant="underlined" />
              </v-card-text>

              <v-card-actions>
                <v-btn @click="blogs.savePost" :loading="blogs.loading">Save post</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-sheet>
      </v-col>
      <v-col v-for="blog in blogs.blog" :key="blog.id" cols="12" sm="6" md="4">
        <v-card rounded="lg">
          <v-img :src="blog.image" aspect-ratio="1.5" cover />

          <v-card-title>{{ blog.caption }}</v-card-title>
          <v-card-text>
            <v-chip size="small">
              <span>{{ new Date(blog.createdAt.seconds).toDateString() }}</span>
            </v-chip>
          </v-card-text>
          <v-card-text>{{ blog.post?.slice(0, 100) }}...<v-btn variant="text" :ripple="false"
              class="text-capitalize px-0">Read more</v-btn></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useBlogStore } from "@/store/blog";
import { ref } from "vue";

const blogs = ref(useBlogStore())

const setImage = e => {
  let file = e.target.files[0]
  if (!file) return

  blogs.value.image = file
}
</script>
