// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["~/assets/main.scss"],

  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      USER_ID: process.env.USER_ID,
    },
  },
});
