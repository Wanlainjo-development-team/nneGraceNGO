<template>
  <div class="bg">
    <v-container>
      <v-sheet min-height="50vh" class="d-flex align-center" color="transparent">
        <v-row>
          <v-col cols="12" sm="7" order="1" order-sm="0">
            <v-card flat color="transparent">
              <v-card-text class="text-h5 text-sm-h3 text-white font-weight-bold" style="line-height: 1em;">Nne-Grace
                (Gallery)</v-card-text>
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

    <v-carousel cycle show-arrows="hover" hide-delimiters class="my-16">
      <v-carousel-item v-for="(image, i) in gallery.gallery" :key="i">
        <v-card rounded="lg" @click="() => { dialog = { active: true, image } }" class="overflow-hidden" height="100%">
          <v-img :src="image" cover aspect-ratio="1.5" />
        </v-card>
      </v-carousel-item>
    </v-carousel>

    <v-row>
      <v-col v-for="(image, i) in gallery.gallery" :key="i" cols="12" sm="4" md="3">
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
.bg {
  background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)), url('https://res.cloudinary.com/rukkiecodes/image/upload/v1680917890/Nne-Grace/images/bg_ggrtsj.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}
</style>