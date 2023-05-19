// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/website/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/website/Home.vue'),
      },
      {
        path: 'home',
        name: 'Home.home',
        component: () => import('@/views/website/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/website/About.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/website/Blog.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/website/Contact.vue'),
      },
      {
        path: 'donate',
        name: 'Donate',
        component: () => import('@/views/website/Donate.vue'),
      },
      {
        path: 'events',
        name: 'Events',
        component: () => import('@/views/website/Events.vue'),
      },
      {
        path: 'gallery',
        name: 'Gallery',
        component: () => import('@/views/website/Gallery.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
