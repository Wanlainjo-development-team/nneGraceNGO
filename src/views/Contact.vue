<template>
  <div class="bg">
    <v-container>
      <v-sheet min-height="50vh" class="d-flex align-center" color="transparent">
        <v-row>
          <v-col cols="12" sm="7" order="1" order-sm="0">
            <v-card flat color="transparent">
              <v-card-text class="text-h5 text-sm-h3 text-white font-weight-bold" style="line-height: 1em;">Nne-Grace
                (Contact Us)</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>

  <v-container class="my-16">
    <Contact />
  </v-container>
</template>

<script setup>
import Contact from '@/components/fragments/Contact.vue'
</script>

<style scoped>
.bg {
  background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)), url('https://res.cloudinary.com/rukkiecodes/image/upload/v1680917890/Nne-Grace/images/bg_ggrtsj.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}
</style>