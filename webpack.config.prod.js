const merge = require('webpack-merge')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const path = require('path')

const baseWebpackConfig = require('./webpack.base.config')

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  },
  module: {
    rules: [
    ]
  },
})

// export prodWebpackConfig
module.exports = new Promise((resolve, reject) => {
 resolve(prodWebpackConfig)
})