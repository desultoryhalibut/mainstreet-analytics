var News = require('./news-model');
var NewsSentimentController = require('../sentiment/news-sentiment-controller');
var request = require('request');
var config = require('../config/config');
var watson = require('watson-developer-cloud');
var Promise = require('bluebird');
var helper = require('../config/utils')


module.exports = {
//goes in client side request:
  getFromAPI: function(req, res) {  //relative route from api/news-model
    var alchemy_data_news = watson.alchemy_data_news({
      api_key: process.env.apikey
    });

    var params = {
      start: 'now-30d',
      end: 'now',
      rank: 'high',
      maxResults: 5,
      'q.enriched.url.enrichedTitle.keywords.keyword.text': 'unemployment^inflation^real estate^acquisition^restaurants^dow jones^economy^panic',
      return: 'enriched.url.title'
    };

    var alchemyGetNews = function(params) {
      return new Promise (function(resolve, reject) {
        alchemy_data_news.getNews(params, function (err, news) {
        if (err)
          reject(err);
        else
          resolve(news);
        });
      });
    }

    //Search alchemy news API for target keywords
    alchemyGetNews(params)
    .then(function(news) {
      res.send(news.result.docs)
      var newsArray = news.result.docs;
      newsArray = newsArray.map(function(val) {
        return {
          timestamp: helper.timeConverter(val.timestamp), 
          title: val.source.enriched.url.title
        }
      });
      //Create an entry of each news headline in database
      News.create(newsArray, function(err, news) {
        if (err) {
          console.error('There is definitely an error:',err);
        } else {
          helper.aggregateNews(); 
          res.redirect('/api/news/sentiment')
        }
      });
    })
    .catch(function(err) {
      console.log(err);
    })

  }
}