const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: 'vue-loader'
      },
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_module/
      },
      {
        test: /.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./public/index.html')
    })
  ]
}