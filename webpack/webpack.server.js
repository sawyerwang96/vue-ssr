const { merge } = require('webpack-merge')

const base = require('./webpack.base.js')

module.exports = merge(base, {
  entry: {
    server: './src/entry/server.entry.js'
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  target: 'node',
})