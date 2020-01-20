const merge = require('webpack-merge')

const path = require('path')

const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true
  },
  module: {
    rules: []
  },
  plugins: []
})

// export webpackConfig
module.exports = new Promise((resolve, reject) => {
 resolve(devWebpackConfig)
})