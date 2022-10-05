import { resolve } from "path";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "Immobiliare Segalerba | Raggiungi i tuoi obiettivi in modo rapido e sicuro",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Il nostro team è composto da professionisti con una profonda conoscenza del mercato in grado di aiutarti a raggiungere i tuoi obiettivi di vendita o di acquisto.",
      },
      { name: "format-detection", content: "telephone=no" },
      { hid: "robots", name: "robots", content: "noindex,nofollow" },
      // { hid: "robots", name: "robots", content: "FOLLOW, INDEX, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  router: {
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
  },
  env: {
    siteUrl: process.env.SITE_URL,
    current_url: process.env.CURRENT_URL,
  },
  alias: {
    "@root": resolve(__dirname, "./"),
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/my.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~plugins/leaflet.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-leaflet",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
