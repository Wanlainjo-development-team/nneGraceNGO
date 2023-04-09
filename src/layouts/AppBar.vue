<template>
  <v-app-bar flat>
    <v-app-bar-title class="d-flex justify-start">
      <v-avatar>
        <v-img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1680885243/Nne-Grace/images/lolo_enij16.jpg"
          aspect-ratio="1" width="40" />
      </v-avatar>

      <span class="font-weight-bold ml-2">Nne</span>-Grace
    </v-app-bar-title>

    <v-spacer />

    <v-btn v-for="(route, i) in app.nav" :key="i" :to="route.to" rounded="lg"
      class="hidden-md-and-down ml-2 text-capitalize">{{ route.title
      }}</v-btn>
    <v-btn to="/donate" class="bg-blue ml-2">Donate</v-btn>

    <v-app-bar-nav-icon @click="app.drawer = !app.drawer" variant="text" class="hidden-lg-and-up ml-2 rounded-lg" />
  </v-app-bar>
</template>

<script setup>
import { useAppStore } from "@/store/app";

const app = useAppStore()
</script>
