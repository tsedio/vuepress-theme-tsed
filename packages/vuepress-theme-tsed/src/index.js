const path = require('path')

// Theme API.
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  // resolve algolia
  const isAlgoliaSearch = (
    themeConfig.algolia
    || Object
      .keys(siteConfig.locales && themeConfig.locales || {})
      .some(base => themeConfig.locales[base].algolia)
  )

  return {
    ...require('@vuepress/theme-default')(options, ctx),
    alias () {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js')
      }
    } // ,
    // 'plugins': [
    //   [
    //     '@silvanite/tailwind', {
    //     config: require('./tailwind.config.js'),
    //     purgecss: { enabled: false }
    //   }]
    // ]
  }
}
