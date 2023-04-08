<template>
    <v-footer class="ma-5 pa-0 d-flex flex-column overflow-hidden" rounded="xl" elevation="5">
        <Map />

        <div class="px-4 py-2 bg-white text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Nne-Grace, All Right Reserves | Powered By <span class="text-blue">Wanlainjo</span></strong>
        </div>
    </v-footer>
</template>

<script setup>
import Map from '@/components/fragments/Map.vue'
</script>
