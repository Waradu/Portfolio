// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "WRDU",
      htmlAttrs: {
        style: "filter: blur(10px);"
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        { name: "author", content: "Waradu" },
        {
          hid: "description",
          name: "description",
          content:
            "Waradu's portfolio",
        },
        {
          property: "og:title",
          content: "Waradu",
        },
        {
          property: "og:description",
          content:
            "Waradu's portfolio",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://waradu.dev",
        },
      ],
    }
  },
  modules: ["nuxt-build-cache", "wrdu-keyboard"],
});
