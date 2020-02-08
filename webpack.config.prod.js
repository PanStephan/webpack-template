const merge = require('webpack-merge')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const baseWebpackConfig = require('./webpack.config.base')

const prodWebpackConfig = merge.smart(baseWebpackConfig, {
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
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
})

module.exports = prodWebpackConfig