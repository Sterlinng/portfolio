import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["~/assets/main.scss"],

  modules: ["@nuxtjs/tailwindcss"],

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      duration: 300
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Amine Fodil-Cherif - Software Engineer',
      meta: [
        // Basic Meta Tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Software Engineer with 5+ years of full-stack experience. Based in Bordeaux, France. Specialized in web & mobile development, building elegant solutions for complex problems.'
        },
        {
          name: 'keywords',
          content: 'Software Engineer, Full Stack Developer, Web Development, Mobile Development, Bordeaux, France, Nuxt, Vue, React, Flutter, Java, Quarkus, PostgreSQL, Amine Fodil-Cherif'
        },
        { name: 'author', content: 'Amine Fodil-Cherif' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://aminefodilcherif.com/' },
        { property: 'og:title', content: 'Amine Fodil-Cherif - Software Engineer' },
        {
          property: 'og:description',
          content: 'Software Engineer with 5+ years of full-stack experience. Based in Bordeaux, France. Specialized in web & mobile development.'
        },
        { property: 'og:image', content: 'https://aminefodilcherif.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Amine Fodil-Cherif Portfolio' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://aminefodilcherif.com/' },
        { name: 'twitter:title', content: 'Amine Fodil-Cherif - Software Engineer' },
        {
          name: 'twitter:description',
          content: 'Software Engineer with 5+ years of full-stack experience. Based in Bordeaux, France.'
        },
        { name: 'twitter:image', content: 'https://aminefodilcherif.com/og-image.png' },
        { name: 'twitter:creator', content: '@aminefodilcherif' },

        // Additional SEO
        { name: 'theme-color', content: '#9333ea' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'canonical', href: 'https://aminefodilcherif.com/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ]
    }
  },

  runtimeConfig: {
    public: {
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      USER_ID: process.env.USER_ID,
      DEFAULT_LOCALE: process.env.DEFAULT_LOCALE || "fr-FR",
    },
  },
});
