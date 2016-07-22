const twitterModels = require('../twitter/twitter-model');
const request = require('request');
const mongoose = require('mongoose');
var uri = 'mongodb://QuinKinser:Ron1680.@ds031608.mlab.com:31608/leaderboards';
db = mongoose.connect(uri);

const interval = 6000;
const = previousDate = Date.now() - interval;

const channels = {
  'nintendo' : ['nintendo'],
  'google' : ['google'],
  'ford': ['ford'],
  'disney': ['disney'],
  'genentech': ['genentech'],
  'gold': ['gold'],
  'negative': ['sell', 'volatility', 'panic', 'hedge'],
  'markets': ['dow', 's&p', 'stocks'],
};


const avergateTweets = function(tweets) {
  const average = tweets.reduce(function(a, b) {
    return a + b.sentiment;
  }, 0);

  const numTweets = tweets.length;
  const tgroupAverage = {
    numTweets: numTweets,
    sentimentAverage: average / numTweets,
    time: Date.now()
  };

  twitterModels.tweetAverage.find({keword: topic}, function(err) {
    if(!err) {
      twitterModels.tweetAverage.update({keword: topic}, tgroupAverage);
    } else {
      twitterModels.tweetAverage.create({keword: topic}, tgroupAverage);
    }
  });
}


const getCollections = function(channels) {
  for(var topic in channels) {
    var tweets = twitterModels.Tweet.find({tag: topic, time: { $gte: previousDate });
    avergateTweets(tweets, topic);
  }
}
