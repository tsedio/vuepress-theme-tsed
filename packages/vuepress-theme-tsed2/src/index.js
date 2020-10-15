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

  siteConfig.postcss = {
    ...siteConfig.postcss || {},
    plugins: [
      ...(siteConfig.postcss || {}).plugins || [],
      require('postcss-omit-import-tilde'),
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-nested'),
      require('postcss-at-rules-variables'),
      require('postcss-each'),
      require('postcss-for'),
      require('postcss-mixins'),
      require('postcss-calc', {
        preserve: false
      })
    ]
  }

  return {
    ...require('@vuepress/theme-default')(options, ctx),
    alias () {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'src/components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js')
      }
    }
  }
}
