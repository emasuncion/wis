import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | WIS` : 'WIS | Online Examination'
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'An online examination system.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  axios: {},

  vuetify: {
    customVariables: ['~/assets/scss/_variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  },

  styleResources: {
    scss: [
      '@/assets/scss/main.scss'
    ]
  }
}
