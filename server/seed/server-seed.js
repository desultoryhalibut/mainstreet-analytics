var News = require('../news/news-model');
var Sentiment = require('../sentiment/sentiment-model');
var Twitter = require('../twitter/twitter-model');
var Users = require('../users/users-model');
// var Finance = require('../finance/finance-model');

News.find().exec()
.then(function(results) {
  if (results.length === 0) {
    News.create({
      // title: results.title, 
      // ..... insert data here
    })
  }
});