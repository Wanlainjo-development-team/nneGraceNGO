<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card rounded="lg" to="/admin/dashboard/gallery">
          <v-carousel interval="5000" cycle show-arrows="hover" hide-delimiters>
            <v-carousel-item v-for="(image, i) in gallery.gallery.slice(0, 10)" :key="i" :src="image.image" cover>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useGelleryStore } from "@/store/gellery";
import { ref } from "vue";

const gallery = ref(useGelleryStore())
</script>
