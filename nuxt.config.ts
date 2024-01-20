import { env } from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-graphql-client"],
  nitro: {
    routeRules: {
      '/api/content': {
        proxy: {
          to: env.PREPR_URL,
        }
      }
    }
  },
  'graphql-client': {
    clients: {
      default: {
        host: 'http://localhost:3000/api/content',
        introspectionHost: env.PREPR_URL,
      }
    }
  }
})
