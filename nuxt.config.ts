// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['./assets/css/global.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  colorMode: {
    preference: 'system', 
    fallback: 'dark',   
    classSuffix: '',   
  },
  runtimeConfig: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    public: {
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    }
  },

})