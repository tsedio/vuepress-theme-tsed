const path = require('path')

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
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
      }
    ],
    include: path.resolve(__dirname, '../')
  })
  return config
}
