module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/index.scss";'
      }
    },
    sourceMap: true,
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
