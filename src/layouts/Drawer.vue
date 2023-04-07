<template>
    <v-navigation-drawer v-model="app.drawer" location="left" border="0">
        <v-card color="transparent" flat>
            <v-card-text class="pa-2">
                <v-list nav>
                    <v-list-item v-for="(route, i) in app.nav" :key="i" :to="route.to" :prepend-icon="route.icon"
                        :title="route.title" :value="route.title"></v-list-item>
                </v-list>
            </v-card-text>
        </v-card>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn to="/contact" block class="bg-blue text-capitalize">
                    Contact Us
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>
  
<script setup>
import { useAppStore } from "@/store/app";
import { ref, onMounted } from "vue";
import { useDisplay } from "vuetify";

const { name } = useDisplay();

const app = ref(useAppStore());

const resetDrawer = () => {
    switch (name.value) {
        case "xs":
            return (app.drawer = false);
        case "sm":
            return (app.drawer = false);
        case "md":
            return (app.drawer = false);
        case "lg":
            return (app.drawer = false);
        case "xl":
            return (app.drawer = false);
        case "xxl":
            return (app.drawer = false);
    }
};

onMounted(() => {
    resetDrawer();
});
</script>