const { dirname, join } = require('path')
const rootDir = dirname(require.resolve('@tsed/vuepress-common'))

module.exports = {
  'stories': [
    join(rootDir, '/components/**/*.stories.mdx'),
    join(rootDir, '/components/**/*.stories.@(js|jsx|ts|tsx)')
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ]
}