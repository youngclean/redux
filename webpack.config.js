const path = require('path');
const webpack = require('webpack');

console.log(`__dirname=${__dirname}`);
module.exports = {
  entry: './src/test/index.js', //入口
  output: {
    path: path.resolve(__dirname, 'bin'),  //输出
    filename: 'index.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    { test: /\.(less|css)$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },
  devtool: "cheap-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 启用 HMR
  ],
  // devServer: {
  //   port: 3002,
  //   hot: true,
  //   contentBase: path.resolve(__dirname, 'bin'),
  // }

}