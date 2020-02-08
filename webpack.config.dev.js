const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true
  },
  module: {
    rules: []
  },
  plugins: []
})

module.exports = devWebpackConfig
