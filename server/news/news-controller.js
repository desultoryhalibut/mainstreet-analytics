var News = require('./news-model');
var NewsSentimentController = require('../sentiment/news-sentiment-controller');
var request = require('request');
var config = require('../config/config');
var watson = require('watson-developer-cloud');
var Promise = require('bluebird');
var helper = require('../config/utils')


module.exports = {

  getFromDB: function(req, res) {  //relative route from api/news-model
    News.find().exec()
    .then(function(news) {
      var n = news.reduce(function(prev, cur) {
        return prev += '. ' + cur.title;
      }, '');
      res.send(n);
    })
    .catch(function(err) {
      console.error(err);
    })
  }
}