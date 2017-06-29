const path = require('path');
const webpack = require('webpack');

console.log(`__dirname=${__dirname}`);
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    simple: './simple/index.js',
    react:  './react/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'bin'),  //输出
    filename: '[name].js'
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