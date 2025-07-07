const environment = process.env.APP_ENV; // <- (※1)
const envSettings = require(`./env.${environment}.js`); 

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            kurocoApiDomain: 'https://nizumi.g.kuroco.app'
        }
    },

    app: {
        head: {
            title: envSettings.META_TITLE,  // <- (※2)
            htmlAttrs: {
                lang: 'ja'
            },