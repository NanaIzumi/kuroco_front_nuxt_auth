import { config as dotenvConfig } from 'dotenv';
import vuetify from 'vite-plugin-vuetify';

dotenvConfig();

export default defineNuxtConfig(() => {
  const environment = process.env.APP_ENV || 'development';
  const envSettings = require(`./env.${environment}.js`);

  return {
    modules: ['@nuxtjs/i18n'],
    css: [
      'vuetify/styles',
      '@mdi/font/css/materialdesignicons.min.css' // ✅ これを追加
    ],
    runtimeConfig: {
      public: {
        kurocoApiDomain: envSettings.BASE_URL
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
      plugins: [vuetify()]
    }
  };
});
