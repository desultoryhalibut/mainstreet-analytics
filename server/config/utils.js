var News = require('../news/news-model');
var NSentiment = require('../sentiment/news-sentiment-controller')

module.exports = {
  timeConverter: function (UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  },

  aggregateNews: function() { //concatenates all titles in database and inputs into sentiment API
    News.find().exec()
    .then(function(news) {
      var n = news.reduce(function(prev, cur) {
        return prev += '. ' + cur.title;
      }, '');
      console.log('Aggregated string of all news:',n)
      NSentiment.getSentiment(n);
    })
    .catch(function(err) {
      console.error(err);
    })
  }
};