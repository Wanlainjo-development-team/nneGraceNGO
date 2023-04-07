// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'home',
        name: 'Home.home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/Blog.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
      },
      {
        path: 'donate',
        name: 'Donate',
        component: () => import('@/views/Donate.vue'),
      },
      {
        path: 'events',
        name: 'Events',
        component: () => import('@/views/Events.vue'),
      },
      {
        path: 'gallery',
        name: 'Gallery',
        component: () => import('@/views/Gallery.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
