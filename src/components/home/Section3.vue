<template>
  <v-container class="mt-16">
    <v-row>
      <v-col cols="12" sm="3">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <span v-bind="props" :class="isHovering ? 'text-blue' : 'text-grey-darken-4'"
              class="font-weight-bold text-h3">GALLERY</span>
          </template>
        </v-hover>
      </v-col>
      <v-divider vertical />
      <v-col cols="12" sm="8">
        <span class="text-grey-darken-4 text-body-1">"Our mission trip was successful thanks to the generosity of our
          donors, allowing us to learn about people's needs. Knowledge is power and education is crucial for progress in
          society and families, as Kofi Annan said."</span>
      </v-col>
    </v-row>
    <v-divider class="my-5" />
    <v-row>
      <v-col v-for="(image, i) in gallery.gallery.slice(0, 12)" :key="i" cols="12" sm="4" md="3">
        <v-card rounded="lg" @click="() => { dialog = { active: true, image } }">
          <v-img :src="image" cover aspect-ratio="1.5" />
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog.active" width="600">
      <v-card rounded="lg">
        <v-img :src="dialog.image" />
        <v-card-actions>
          <v-spacer />
          <v-btn @click="dialog.active = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { useGelleryStore } from '@/store/gellery';
import { ref } from 'vue';

const gallery = useGelleryStore()

const dialog = ref({
  active: false
})
</script>

<style scoped>
* {
  transition: all .25s ease-in-out;
}
</style>