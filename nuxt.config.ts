import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
  ],
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': config => {
      config.plugins.push(
        vuetify({
          // styles: { configFile: 'assets/settings.scss' },
        })
      )
    },
  },
})
