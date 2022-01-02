const { appConfig } = require("./package.json");
const viteMainJs = require("vite-main-js");
const preprocessFetch = require("svelte-preprocessor-fetch");
const preprocess = require("svelte-preprocess");
const { svelte } = require("@sveltejs/vite-plugin-svelte");
const { port } = appConfig;
const production = process.env.NODE_ENV === "production";
const buildVars = require("./src/svelte-build-vars/index.js");

module.exports = {
  server: {
    port: port,
    proxy: {
      "^/.netlify/functions/images/.*": {
        target: "http://localhost:9999",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    polyfillModulePreload: false,
    cssCodeSplit: false,
  },
  optimizeDeps: {
    exclude: ["@roxi/routify"],
  },
  resolve: {
    dedupe: ["@roxi/routify"],
  },
  plugins: [
    viteMainJs(),
    svelte({
      preprocess: [preprocess(), buildVars.default()],

      emitCss: true,
      hot: !production,
    }),
  ],
};
