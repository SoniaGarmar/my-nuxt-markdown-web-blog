const i18nOptions = {
  useCookie: false,
  alwaysRedirect: true,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'content-en.json'
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
      file: 'content-es.json'
    }
  ],
  lazy: true,
  seo: false,
  langDir: '/locales/',
  defaultLocale: 'en',
  parsePages: false
}

module.exports = {
  i18nOptions
}
