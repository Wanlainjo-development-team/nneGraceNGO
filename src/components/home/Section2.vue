<template>
  <v-container class="mt-16">
    <v-row>
      <v-col cols="12" sm="2">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <span v-bind="props" :class="isHovering ? 'text-blue' : 'text-grey-darken-4'"
              class="font-weight-bold text-h3">About</span>
          </template>
        </v-hover>
      </v-col>
      <v-divider vertical />
      <v-col cols="12" sm="9">
        <span class="text-grey-darken-4 text-body-1">"Nne-Grace International Foundation: Enhancing Lives Through Grace.
          Bringing Health and Life Opportunities
          to the Underserved. Join Our Mission Today!"</span>
      </v-col>
    </v-row>
    <v-divider class="my-5" />
    <v-row>
      <v-col cols="12" sm="7" order="1" order-sm="0">
        <v-card flat>
          <v-card-title class="font-weight-bold">OUR STORY</v-card-title>
          <v-card-text class="text-grey-darken-4 text-body-2">
            Nne-Grace International Foundation is a non-profit organization dedicated to improving the lives of
            underserved and less privileged communities through grace. Our mission is to enhance the well-being of
            individuals and families by providing access to healthcare, education, and life opportunities.
            <br>
            <br>
            Our story began with a simple conversation about health and wellness during a visit to a village in Nigeria.
            We discovered a lack of knowledge about diseases and their symptoms, which led us to launch a small health
            mission in the area. This eye-opening experience fueled our desire to do more and serve in different
            capacities.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card flat rounded="lg">
          <v-img
            src="https://res.cloudinary.com/rukkiecodes/image/upload/v1680885250/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.2712_gi1ccu.jpg" />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card flat rounded="lg">
          <v-img
            src="https://res.cloudinary.com/rukkiecodes/image/upload/v1680885250/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.2712_gi1ccu.jpg" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" order="1" order-sm="0">
        <v-card flat>
          <v-card-title class="font-weight-bold">OUR MISSON</v-card-title>
          <v-card-text class="text-grey-darken-4 text-body-2">
            Welcome to Nne-Grace International Foundation! Our mission is to enhance the lives of underserved and less
            privileged communities through grace. We strive to bring health and life opportunities to those in need and to
            counteract feelings of hopelessness. Our organization is a non-profit in compliance with 501(c) 3 of the
            Internal Revenue Service.
            <br>
            <br>
            We believe that knowledge is power, information is liberating, and education is the premise of progress in
            every society and family. Your engagement and donations will give hope, provide knowledge, and impact lives by
            providing another healthy day to smile for. Thank you for your support!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
* {
  transition: all .25s ease-in-out;
}
</style>