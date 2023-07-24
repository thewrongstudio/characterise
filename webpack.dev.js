const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/static/js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
  },
})