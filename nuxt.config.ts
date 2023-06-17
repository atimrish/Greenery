// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-swiper',
        'nuxt-mongoose',
        '@pinia/nuxt',
    ],
    swiper: {
        prefix: 'Swiper',
        modules: [
            'pagination',
            "effect-fade",
            'free-mode'
        ]
    },
    mongoose: {
        uri: 'mongodb://127.0.0.1/Greenery',
        options: {},
        modelsDir: 'models',
    },
    $meta: {
        name: 'Greenery',
        title: 'Greenery'
    }


})