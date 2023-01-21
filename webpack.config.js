const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    src: './client/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // for babel-loader 8.x | babel 7.x
          presets: ['@babel/env', '@babel/react']
          // vs. ['env', 'react'] for babel-loader 7.x | babel 6.x
        }
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
     template: 'index.html'
    }),
  ],
  devServer: {
    static: '/build',
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
