const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const filename = () => isDev ?  `[name]` : `[name].[hash]`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    filename: `${filename()}.js`, 
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `fonts/${filename()}.[ext]`
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/, 
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${filename()}.css`,
    }),
    new HtmlWebpackPlugin({
      filename: `${filename()}.html`,
      template: 'views/index.html',
      minify: {
        collapseWhitespace: isDev
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {from:'./assets/images', to:`images/${filename()}.[ext]`} 
    ]),
  ]
}