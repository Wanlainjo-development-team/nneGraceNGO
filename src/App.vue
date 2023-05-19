<template>
  <router-view />
  <v-snackbar v-model="app.snackbar" location="top right" :timeout="2000" :color="app.snackColor">
    {{ app.snackText }}
  </v-snackbar>
</template>

<script setup>
import { useAppStore } from "./store/app";

const app = useAppStore()
</script>
