const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = function(app) {

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));

};
