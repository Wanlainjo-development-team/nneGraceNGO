<template>
  <div class="bg">
    <v-container>
      <v-sheet min-height="50vh" class="d-flex align-center" color="transparent">
        <v-row>
          <v-col cols="12" sm="7" order="1" order-sm="0">
            <v-card flat color="transparent">
              <v-card-text class="text-h5 text-sm-h3 text-white font-weight-bold" style="line-height: 1em;">Nne-Grace
                (Donate)</v-card-text>
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
              class="font-weight-bold text-h3">Donate</span>
          </template>
        </v-hover>
      </v-col>
      <v-divider vertical />
      <v-col cols="12" sm="8">
        <span class="text-grey-darken-4 text-body-1">"Nne-Grace International Foundation: Enhancing Lives Through Grace.
          Bringing Health and Life Opportunities
          to the Underserved. Join Our Mission Today!"</span>
      </v-col>
    </v-row>
    <v-divider class="my-5" />
    <v-row>
      <v-col cols="12" sm="7" order="1" order-sm="0">
        <v-card flat>
          <v-toolbar color="transparent">
            <v-text-field hide-details label="Enter amount" prepend-inner-icon="mdi-currency-usd" variant="underlined" />
            <v-btn size="large" rounded="lg" class="text-body-1 bg-blue ml-6">Donate</v-btn>
          </v-toolbar>
          <v-card-text class="text-grey-darken-4 text-body-2">
            Thank you for considering donating to Nne-Grace International Foundation. Your generous gift will go a long
            way in helping us enhance the lives of the underserved and less privileged in our community.
            <br>
            <br>
            At Nne-Grace International Foundation, we believe that everyone deserves access to good health and life
            opportunities, regardless of their socio-economic status. With your support, we can continue to provide
            much-needed health education, awareness campaigns, and medical missions to those who lack access to basic
            healthcare.
            <br>
            <br>
            Your donation will enable us to reach more people in need, provide free health screenings, and offer necessary
            medications and treatment to those who cannot afford them. With your contribution, we can expand our reach and
            make a significant impact in the lives of people in poverty.
            <br>
            <br>
            You can donate securely through our website at nnegrace.org or by mailing a check to our office. Your donation
            is tax-deductible, and we are a 501(c)3 non-profit organization in compliance with the Internal Revenue
            Service.
            <br>
            <br>
            Thank you for partnering with us to serve the less privileged and make a positive difference in our community.
            Together, we can bring hope, provide knowledge, and counteract hopelessness.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card flat rounded="lg">
          <v-img
            src="https://res.cloudinary.com/rukkiecodes/image/upload/v1680885252/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.25121_ybkucl.jpg"
            aspect-ratio="1.5" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
* {
  transition: all .25s ease-in-out;
}

.bg {
  background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)), url('https://res.cloudinary.com/rukkiecodes/image/upload/v1680917890/Nne-Grace/images/bg_ggrtsj.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}
</style>