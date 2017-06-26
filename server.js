const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  headers: { "Access-Control-Allow-Origin": "*" }
}).listen(3002, '127.0.0.1', function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://127.0.0.1:3002/');
});