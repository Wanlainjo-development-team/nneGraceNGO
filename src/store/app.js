// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    nav: [
      { to: 'home', title: 'Home' },
      { to: 'about', title: 'About' },
      { to: 'blog', title: 'Blog' },
      { to: 'contact', title: 'Contact' },
      { to: 'gallery', title: 'Gallery' },
    ],

    drawer: false
  }),
})
