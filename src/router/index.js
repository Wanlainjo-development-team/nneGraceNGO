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

  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/layouts/admin/Default.vue'),

    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/views/admin/Login.vue')
      },

      {
        path: 'dashboard',
        name: 'admin.dashboard',
        component: () => import('@/layouts/admin/Dashboard.vue'),
        
        children: [
          {
            path: '',
            name: 'admin.dashboard.overview',
            component: () => import('@/views/admin/dashboard/Overview.vue')
          },
          {
            path: 'overview',
            name: 'admin.dashboard.overview',
            component: () => import('@/views/admin/dashboard/Overview.vue')
          },
          {
            path: 'blog',
            name: 'admin.dashboard.blog',
            component: () => import('@/views/admin/dashboard/blog/BlogView.vue'),
            
            children: [
              {
                path: '',
                name: 'admin.dashboard.blog.blogs',
                component: () => import('@/views/admin/dashboard/blog/Blogs.vue')
              },
              {
                path: ':id',
                name: 'admin.dashboard.blog.blog',
                component: () => import('@/views/admin/dashboard/blog/Blog.vue')
              },
            ]
          },
          {
            path: 'gallery',
            name: 'admin.dashboard.gallery',
            component: () => import('@/views/admin/dashboard/Gallery.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
