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
import AppBar from './AppBar.vue'
import Drawer from "./Drawer.vue";
import Footer from "./Footer.vue";
</script>
