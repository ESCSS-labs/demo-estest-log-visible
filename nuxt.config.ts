// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-escss-estest'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `@use '/assets/styles/_awaken.scss' as *;`,
        },
      },
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },
  app: {
    head: {
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'icon', href: '/escss.svg' }
      ],
    }
  }
})