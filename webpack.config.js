const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/static/js'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(?:jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react']
            ]
          }
        }
      }
    ]
  }
};