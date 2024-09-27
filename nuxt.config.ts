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
    "@pinia/nuxt",
  ],
  ssr: false,
  ionic: {
    css: {
      utilities: true,
    },
  },
  runtimeConfig: {
    public: {
      directus: {
        url: "", // set as environment variable
        readMe:
          "id, email, first_name, last_name, avatar, bio, workspaces.workspaces_id.*",
      },
    },
  },

  routeRules: {
    "/": { redirect: "/home" },
    "/talent": { redirect: "/talent/home" },
    "/host": { redirect: "/host/home" },
  },
})
