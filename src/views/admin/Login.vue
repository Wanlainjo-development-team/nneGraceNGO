<template>
    <v-container>
        <v-card width="400" max-width="100%" class="mx-auto mt-16">
            <v-card-title class="text-center">Log in as admin</v-card-title>

            <v-card-text>
                <v-text-field label="Email" color="blue" variant="underlined" prepend-inner-icon="mdi-at" />
                <v-text-field label="Password" color="blue" variant="underlined" prepend-inner-icon="mdi-lock"
                    :type="showPassword ? 'password' : 'text'" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append-inner="showPassword = !showPassword" />
            </v-card-text>
            <v-card-actions>
                <v-btn class="bg-blue" block size="large">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from "vue";

const showPassword = ref(false)
</script>
