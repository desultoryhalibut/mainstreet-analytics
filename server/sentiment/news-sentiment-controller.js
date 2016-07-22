var NSentiment = require('./news-sentiment-model');
var News = require('../news/news-model');
var request = require('request');
var config = require('../config/config');
var watson = require('watson-developer-cloud');
var Promise = require('bluebird');
var helper = require('../config/utils')



module.exports = {

  getSentiment: function(req, res) { 

    //Grab news headlines from database
    NSentiment.find().exec()
    .then(function(sentiment) {
      res.json(sentiment);

      })
      .catch(function(err) {
        res.send('Error grabbing from News Sentiment database:',err)
      })
  }
}