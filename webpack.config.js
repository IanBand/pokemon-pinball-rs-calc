const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  mode: 'development',
  entry: '/src/index.js',
  plugins: [new HtmlWebpackPlugin({
    title: 'Pinball Calc',
    filename: '/src/index.html'
  })],
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 9000,
  },
};