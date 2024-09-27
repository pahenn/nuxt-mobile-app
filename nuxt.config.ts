// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxtjs/ionic",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
  ],
  ssr: false,
  ionic: {
    css: {
      utilities: true,
    },
  },

  routeRules: {
    "/": { redirect: "/home" },
    "/talent": { redirect: "/talent/home" },
    "/host": { redirect: "/host/home" },
  },
})
