const path = require('path')

const { merge } = require('webpack-merge')
const CopyPlugin = require("copy-webpack-plugin")

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build/static/js'),
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: 'public', to: path.resolve(__dirname, 'build')},
      ],
    }),
  ],

})