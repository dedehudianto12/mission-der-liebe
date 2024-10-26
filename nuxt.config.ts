// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  modules: [
    "@hypernym/nuxt-gsap",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxtjs/i18n",
  ],

  gsap: {
    provide: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },

  tailwindcss: {
    exposeConfig: true,
  },

  colorMode: {
    classSuffix: "",
  },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "ge-DE",
        iso: "ge-DE",
        name: "Germany(Deutch)",
        file: "ge-DE.json",
      },
      {
        code: "in-IDN",
        iso: "in-IDN",
        name: "Bahasa(Indonesia)",
        file: "in-IDN.json",
      },
    ],
    defaultLocale: "en-US",
  },
  app: {
    head: {
      title: "Mission der Liebe",
    },
  },
});
