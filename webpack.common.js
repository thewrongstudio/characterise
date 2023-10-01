module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /src\/.*\.(tsx?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
