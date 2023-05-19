<template>
  <div class="bg">
    <v-container>
      <v-sheet min-height="50vh" class="d-flex align-center" color="transparent">
        <v-row>
          <v-col cols="12" sm="7" order="1" order-sm="0">
            <v-card flat color="transparent">
              <v-card-text class="text-h5 text-sm-h3 text-white font-weight-bold" style="line-height: 1em;">Nne-Grace
                (About Us)</v-card-text>
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
              class="font-weight-bold text-h3">About</span>
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
          <v-card-title class="font-weight-bold">OUR STORY</v-card-title>
          <v-card-text class="text-grey-darken-4 text-body-2">
            Nne-Grace International Foundation is a non-profit organization that aims to enhance the lives of underserved
            and less privileged communities through grace. Our mission is to bring health benefits and life opportunities
            to those who need them most, and to serve as a countermeasure to hopelessness.
            <br>
            <br>
            Our journey began during a routine visit to Nigeria when we had a casual conversation about the health status
            and wellbeing of the people in a village. It was then that we became aware of the lack of knowledge
            surrounding disease processes like high blood pressure, diabetes, asthma, and congestive heart failure. The
            people in the community, both young and old, believed that their health issues and poverty were caused by
            someone working against them.
            <br>
            <br>
            In December 2017, we launched a small health mission in two villages in Oboro, Ikwuano Local Government in
            Abia State, Nigeria. The mission served as an eye-opener, highlighting the needs of the people and creating a
            desire to do more. We were able to provide resources and knowledge to those in need thanks to the generosity
            of our donors.
            <br>
            <br>
            At Nne-Grace International Foundation, we believe that knowledge is power, information is liberating, and
            education is the premise of progress in every society and family. With your support and engagement, we can
            continue to impact lives, providing hope and knowledge to those in poverty and creating healthy smiles for
            another day.
            <br>
            <br>
            Your generous gifts and engagements will give hope, provide knowledge to the young and old in poverty, and
            will impact lives by providing another healthy day to smile for. We invite you to join us in our mission to
            enhance the lives of underserved and less privileged communities through grace. Please visit our website at
            nnegrace.org or email us at <a href="mailto:norjinta@ymail.com"
              class="text-grey-darken-4">norjinta@ymail.com</a> to learn more about our work and how you can get involved.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card flat rounded="lg">
          <v-img
            src="https://res.cloudinary.com/rukkiecodes/image/upload/v1680885250/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.2712_gi1ccu.jpg"
            aspect-ratio="1.5" />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card flat rounded="lg">
          <v-img
            src="https://res.cloudinary.com/rukkiecodes/image/upload/v1680885250/Nne-Grace/images/WhatsApp_Image_2023-04-06_at_01.17.2712_gi1ccu.jpg"
            aspect-ratio="1.5" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" order="1" order-sm="0">
        <v-card flat>
          <v-card-title class="font-weight-bold">OUR MISSON</v-card-title>
          <v-card-text class="text-grey-darken-4 text-body-2">
            At Nne-Grace International Foundation, our mission is to enhance the lives of the underserved and less
            privileged through Grace. We believe that every person deserves access to healthcare and life opportunities,
            regardless of their background or circumstances. Our focus is on providing education and resources to
            communities in need, particularly on topics related to disease prevention and management.
            <br>
            <br>
            Our story began with a simple conversation during a routine visit to Nigeria, where we became aware of the
            lack of knowledge and resources available to many communities. In response, we launched a small health mission
            in two villages in Oboro, Ikwuano Local Government in Abia State, Nigeria. This was an eye-opening experience
            that ignited our passion to serve in different capacities, always guided by God’s grace and wisdom.
            <br>
            <br>
            We are a non-profit organization that is fully compliant with the 501(c) 3 regulations of the Internal Revenue
            Service. Our goal is to serve as a countermeasure to hopelessness by bringing hope, knowledge, and healthy
            opportunities to those who need it most. Your generous donations and engagement will help us continue to
            provide education and resources, and make a positive impact on the lives of those we serve.
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

.bg {
  background: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)), url('https://res.cloudinary.com/rukkiecodes/image/upload/v1680917890/Nne-Grace/images/bg_ggrtsj.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}</style>