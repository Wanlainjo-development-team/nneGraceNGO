<template>
  <v-container>
    <v-sheet min-height="91vh" class="d-flex align-center">
      <v-row>
        <v-col cols="12" sm="7" order="1" order-sm="0">
          <v-card flat>
            <v-card-text class="text-h5 text-sm-h3 text-grey-darken-4 font-weight-bold"
              style="line-height: 1em;">Nne-Grace International Foundation</v-card-text>
            <v-card-text class="text-body-1 text-grey-darken-4 font-weight-bold">Enhancing Lives Through
              Grace</v-card-text>

            <v-card-text class="text-body-1 text-grey-darken-4">
              Welcome to Nne-Grace International Foundation, a non-profit organization dedicated to improving the lives of
              underserved communities. Our mission is to enhance the life of the community and touch the lives of the less
              privileged through Grace. With a focus on health and education, we strive to be a countermeasure to
              hopelessness and provide a path to a better future.
            </v-card-text>
            <v-card-text class="text-body-1 text-grey-darken-4">
              Join us in our mission to serve those in need. Your generosity can make a difference in the lives of those
              less fortunate. Contact us today to learn more about how you can help.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="5">
          <v-card rounded="lg">
            <v-carousel :show-arrows="false" hide-delimiters interval="5000" height="100%" cycle>
              <v-carousel-item v-for="(image, i) in images" :key="i">
                <v-img :src="image" lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg" cover aspect-ratio="1.5" />
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup>
const images = [
  'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885247/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.281_kt5hyp.jpg',
  'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885251/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.17213d_vcguor.jpg',
  'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885251/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.2734_g8svzx.jpg',
  'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885250/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.2632_iis9hf.jpg',
  'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885249/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.2212d_ajaqpu.jpg',
  'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885248/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.1412dd_g7ck3g.jpg',
  'https://res.cloudinary.com/rukkiecodes/image/upload/v1680885246/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.23wdq_t15ljx.jpg'
]
</script>