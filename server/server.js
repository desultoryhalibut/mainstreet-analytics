var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var app = express();

var compiler = webpack(webpackConfig);

require('./config/mongoose')();
require('./config/express')(app);
require('./config/routes')(app);

// set static page
app.use(express.static(__dirname + '/../client/www'));

// boilerplate code, investigate further
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('app listening at host, port:', host, port);
});
