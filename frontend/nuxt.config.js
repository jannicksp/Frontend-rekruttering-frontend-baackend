const postcssCustomMedia = require('postcss-custom-media')
const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const postcssReporter = require('postcss-reporter')
const postcssNested = require('postcss-nested')
const postcssCalc = require('postcss-calc')

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337'
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Staatliches'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@assets/css/master.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/apollo', '@nuxtjs/markdownit'],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      // link,
      default: '~/apollo/config.js'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    optimizeCSS: true,
    postcss: {
      plugins: [
        postcssImport(),
        postcssCustomMedia({
          importFrom: 'assets/css/_base/_mediaqueries.css'
        }),
        postcssPresetEnv({
          stage: 2, // default stage is 2
          preserve: false,
          autoprefixer: {
            grid: true
          },
          features: {
            'color-mod-function': { unresolved: 'warn' },
            'custom-media-queries': {}
          },
          browsers: ['>= 5% in DK', 'ie 11']
        }),
        postcssNested(),
        postcssCalc(),
        postcssReporter({
          clearReportedMessages: true
        })
      ]
    }
  }
}
