const path = require('path');
const { i18nOptions } = require('./locales/nuxt-i18n-config');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Cutive+Mono|Montserrat&display=swap'}
    ]


  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/eventbus',
    '~/plugins/prism',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    // your settings here
    scss: [
      './assets/vars/*.scss',
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',

    ['nuxt-fontawesome', {
     // component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
        }
      ]
    }],

    ['nuxt-i18n', i18nOptions],
   // ['@nuxtjs/markdownit', { linkify: true }]

  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push(
        {
            test: /\.md$/,
            include: path.resolve(__dirname, "content"),
            loader: "frontmatter-markdown-loader",
        }
      );
    }
  }
}
