<template>
  <v-container class="my-16">
    <v-row>
      <v-col cols="12" sm="3">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <span v-bind="props" :class="isHovering ? 'text-blue' : 'text-grey-darken-4'"
              class="font-weight-bold text-h3">THE TEAM</span>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="8">
        <span class="text-grey-darken-4 text-body-1"></span>
      </v-col>
    </v-row>
    <v-divider class="my-5" />

    <v-row>
      <v-col v-for="({ image, name }, i) in app.team" :key="i" cols="12" sm="6" md="4" lg="3">
        <v-card @click="dialog = { active: true, image, name }" rounded="lg">
          <v-img :src="image" aspect-ratio="1" cover />

          <v-card-title>{{ name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog.active" width="400">
      <v-card rounded="lg">
        <v-toolbar density="compact" color="white">
          <v-toolbar-title>{{ dialog.name }}</v-toolbar-title>
          <v-btn @click="dialog.active = false" icon size="small">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-img :src="dialog.image" />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { ref } from "vue";

const app = useAppStore()

const dialog = ref({ active: false })
</script>