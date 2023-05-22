<template>
  <div class="bg">
    <v-container>
      <v-sheet min-height="50vh" class="d-flex align-center" color="transparent">
        <v-row>
          <v-col cols="12" sm="7" order="1" order-sm="0">
            <v-card flat color="transparent">
              <v-card-text class="text-h5 text-sm-h3 text-white font-weight-bold" style="line-height: 1em;">Nne-Grace
                (NEWS)</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>

  <v-container class="my-16">
    <v-row>
      <v-col cols="12" sm="3">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <span v-bind="props" :class="isHovering ? 'text-blue' : 'text-grey-darken-4'"
              class="font-weight-bold text-h3">NEWS</span>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <v-divider class="my-5" />
    <v-row>
      <v-col v-for="(blog, i) in blogs.blog" :key="i" cols="12" sm="6" md="4">
        <v-card rounded="lg">
          <v-img :src="blog.image" aspect-ratio="1.5" cover />

          <v-card-title>{{ blog.caption }}</v-card-title>
          <v-card-text>
            <v-chip size="small">
              <span>{{ new Date(blog.createdAt.seconds).toDateString() }}</span>
            </v-chip>
          </v-card-text>
          <v-card-text>{{ blog.post?.slice(0, 100) }}...<v-btn :to="`/blog/${blog.id}`" variant="text"
              :ripple="false" class="text-capitalize px-0">Read more</v-btn></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useBlogStore } from "@/store/blog";

const blogs = useBlogStore()
</script>

<style scoped>
* {
  transition: all .25s ease-in-out;
}

.bg {
  background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)), url('https://res.cloudinary.com/rukkiecodes/image/upload/v1680917890/Nne-Grace/images/bg_ggrtsj.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}
</style>