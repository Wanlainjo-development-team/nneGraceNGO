<template>
    <v-row>
        <v-col cols="12" sm="6">
            <v-card flat>
                <v-card-title class="text-grey-darken-4">DROP US A MESSAGE</v-card-title>
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Your name" variant="underlined" />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Your email" variant="underlined" />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Subject" variant="underlined" />
                        </v-col>
                        <v-col cols="12">
                            <v-textarea label="Your message" rows="3" auto-grow variant="underlined" />
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn class="bg-blue px-4" rounded="lg" size="large">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6">
            <v-card flat>
                <v-card-title class="text-grey-darken-4">CONTACT INFO</v-card-title>
                <v-card-text class="text-grey-darken-4 text-body-2">
                    Contact Nne-Grace International Foundation to make a difference in the lives of underserved communities.
                    Our
                    non-profit organization offers health and life opportunities, providing hope where it's needed most. Get
                    in
                    touch today at norjinta@ymail.com or call us at 763-245-0896.
                </v-card-text>
                <v-card-text>
                    <div class="d-flex justify-start align-center">
                        <v-avatar variant="outlined" color="blue">
                            <v-icon>mdi-map-marker</v-icon>
                        </v-avatar>
                        <span class="ml-4 text-grey-darken-4 text-body-1">13/2 Elizabeth St, Melbourne VIC 3000,
                            Australia</span>
                    </div>
                    <div class="d-flex justify-start align-center mt-4">
                        <v-avatar variant="outlined" color="blue">
                            <v-icon>mdi-phone</v-icon>
                        </v-avatar>
                        <span class="ml-4 text-grey-darken-4 text-body-1"><a href="tel:+1763-245-0896"
                                class="text-grey-darken-4">763-245-0896</a></span>
                    </div>
                    <div class="d-flex justify-start align-center mt-4">
                        <v-avatar variant="outlined" color="blue">
                            <v-icon>mdi-at</v-icon>
                        </v-avatar>
                        <span class="ml-4 text-grey-darken-4 text-body-1"><a href="mailto:norjinta@ymail.com"
                                class="text-grey-darken-4">norjinta@ymail.com</a></span>
                    </div>
                    <div class="d-flex justify-start align-center mt-4">
                        <v-avatar variant="outlined" color="blue">
                            <v-icon>mdi-web</v-icon>
                        </v-avatar>
                        <span @click="openWebsite"
                            class="ml-4 text-grey-darken-4 text-body-1 text-decoration-underline">http://nnegrace.org</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
  
<script setup>
import { useBlogStore } from '@/store/blog';

const blogs = useBlogStore()

const openWebsite = () => window.open('http://nnegrace.org')
</script>