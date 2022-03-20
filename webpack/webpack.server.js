const { merge } = require('webpack-merge')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  entry: {
    server: './src/entry/server.entry.js'
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  plugins: [
    new VueSSRServerPlugin()
  ]
})