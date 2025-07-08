import { config as dotenvConfig } from 'dotenv'
import vuetify from 'vite-plugin-vuetify'

dotenvConfig()

export default defineNuxtConfig(() => {
  const environment = process.env.APP_ENV || 'development'
  const envSettings = require(`./env.${environment}.js`)

  return {
    modules: ['@nuxtjs/i18n'],
    css: [
      'vuetify/styles',
      '@mdi/font/css/materialdesignicons.min.css'
    ],
    runtimeConfig: {
      public: {
        kurocoApiDomain: "https://nizumi.g.kuroco.app"
      }
    },
    app: {
      head: {
        title: envSettings.META_TITLE,
        htmlAttrs: {
          lang: 'ja'
        }
      }
    },
    vite: {
      plugins: [vuetify()],
      ssr: {
        noExternal: ['vuetify']  
      }
    }
  }
})
