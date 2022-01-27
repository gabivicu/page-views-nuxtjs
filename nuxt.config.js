const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'WD BLOG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool Web Dev Blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.baseUrl || 'https://blog-nuxtjs-1344e-default-rtdb.europe-west1.firebasedatabase.app'
  }

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  env: {
    baseUrl: process.env.baseUrl || 'https://blog-nuxtjs-1344e-default-rtdb.europe-west1.firebasedatabase.app'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }

}
