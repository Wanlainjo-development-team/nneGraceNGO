<template>
    <v-app>
        <v-app-bar density="comfortable" order="1" flat></v-app-bar>
        <v-navigation-drawer class="px-1">
            <v-list>
                <v-list-item v-for="(route, i) in routes" :key="i" :to="route.to" nav>
                    <v-list-item-title>{{ route.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup>
import { useBlogStore } from "@/store/blog";
import { useGelleryStore } from "@/store/gellery";
import { useMessageStore } from "@/store/message";
import { onMounted, ref } from "vue";

const blog = useBlogStore()
const gallery = useGelleryStore()
const message = useMessageStore()

onMounted(() => {
    blog.getBlogPosts()
    gallery.getGalleryImages()
    message.getMessages()
})

const routes = ref([
    {
        title: 'Overview',
        to: '/admin/dashboard/overview'
    },
    {
        title: 'Blog',
        to: '/admin/dashboard/blog'
    },
    {
        title: 'Gallery',
        to: '/admin/dashboard/gallery'
    },
    {
        title: 'message',
        to: '/admin/dashboard/message'
    }
])
</script>