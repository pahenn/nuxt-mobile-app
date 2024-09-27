// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxtjs/ionic", "@nuxt/icon"],
  ssr: false,
  ionic: {
    css: {
      utilities: true,
    },
  },
})