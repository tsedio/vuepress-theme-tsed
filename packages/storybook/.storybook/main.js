const {dirname, join} = require('path')
const path = require('path')
const rootDir = dirname(require.resolve('@tsed/vuepress-common'))

module.exports = {
  'stories': [
    join(rootDir, '/components/**/*.stories.mdx'),
    join(rootDir, '/components/**/*.stories.@(js|jsx|ts|tsx)')
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1
        },
        postcssLoaderOptions: {
          postcssOptions: {
            plugins: [
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
          // When using postCSS 8
          // implementation: require('postcss'),
        }
      }
    }
  ]
}
