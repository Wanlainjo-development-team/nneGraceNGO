<template>
  <v-app>
    <AppBar />
    <Drawer />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
import { useBlogStore } from '@/store/blog';
import { useGelleryStore } from '@/store/gellery';
import { onMounted } from 'vue';
import AppBar from './AppBar.vue'
import Drawer from "./Drawer.vue";
import Footer from "./Footer.vue";

const gallery = useGelleryStore()
const blog = useBlogStore()

onMounted(() => {
  gallery.getGalleryImages()
  blog.getBlogPosts()
})
</script>
