// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-svgo"],
  devtools: { enabled: true },
  css: ["./assets/main.css"],
  svgo: {
    defaultImport: "component",
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeDoctype: false,
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },

  // routeRules: {
  //   "/": {
  //     ssr: false,
  //   },
  //   "/about": {
  //     ssr: false,
  //   },
  // },
});
