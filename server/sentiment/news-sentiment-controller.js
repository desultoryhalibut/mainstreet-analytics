var NSentiment = require('./news-sentiment-model');
var News = require('../news/news-model');
var request = require('request');
var config = require('../config/config');
var watson = require('watson-developer-cloud');
var Promise = require('bluebird');
var helper = require('../config/utils')



module.exports = {

  getSentiment: function(req, res) { 
    var string;

    //Grab news headlines from database
    News.find().exec()
    .then(function(news) {

      var alchemy_language = watson.alchemy_language({
        api_key: process.env.apikey
      });

      string = news.reduce(function(prev, cur) {
        return prev += '. ' + cur.title;
      }, '');

      var params = {
        text: string,
        targets: ['inflation','unemployment','real estate', 'acquisition','restaurants','dow jones','economy']
      };

      // Create function that returns promise
      var alchemyGetSentiment = function(params) {
        return new Promise (function(resolve,reject) {
          alchemy_language.sentiment(params, function(err, sent) {
            if (err) {
              reject(err);
            } else {
              console.log('sent:',sent)
              resolve(sent);
            }
          });
        })
      };

      //call alchemygetsentiment using above params to pass 
      alchemyGetSentiment(params)
      .then(function(sent) {
        console.log('show sent.results inside alchemy get sentiment:',sent.results)
        res.send(sent.results);
        var sentimentArr = sent.results.map(function(obj) {
          return {
            newsTopic: obj.text,
            sentimentScore: obj.sentiment.score,
            type: obj.sentiment.type
            // relevance: obj.relevance
          }
        })
        console.log('worked!!')
        NSentiment.create(sentimentArr, function(err, sentiment) {
          if (err) console.error( 'could not save because of: ',err );
          else {
            console.log('Sentiment:',JSON.stringify(sent, null, 2))
            res.send(JSON.stringify(sent));
          }
        })

      })
      .catch(function(err) {
        console.error(err);
      })
    });
  }
}