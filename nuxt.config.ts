import compression from 'vite-plugin-compression2'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-lazy-load',
    '@nuxtjs/robots',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  css: [
    "~/assets/css/tailwind.css"
  ],
  vite: {
    plugins: [
      compression(),
    ],
  },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
})