const { default: merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const base = require('./webpack.base')

module.exports = merge(base, {
  entry: {
    client: './src/entry/client.entry.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./public/index.html')
    })
  ]
})