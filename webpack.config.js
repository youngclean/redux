const path = require('path');
const webpack = require('webpack');
const srcPath = './src';

module.exports = {
  entry: {
    simple: path.resolve(srcPath, 'simple/index.js'),
    react: path.resolve(srcPath, 'react/index.js'),
    todo: path.resolve(srcPath, 'todo/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'bin'),  //输出
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    { test: /\.(less|css)$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 启用 HMR
  ],
}