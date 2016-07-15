//express middleware to help route
var NewsController = require('./news-controller');
var NewsRouter = require('express').Router();

NewsRouter.get('/', function(req, res) {  //relative route from api/news
  request({
    method: 'GET',
    uri: '',
    auth: {} //example properties here - REPLACE
  }, function(err, response, body) {
    if (err) throw err;
    else {
      console.log('News Router call was successful.');
      res.end(JSON.stringify(body));
    }
  });
});


module.exports = NewsRouter;