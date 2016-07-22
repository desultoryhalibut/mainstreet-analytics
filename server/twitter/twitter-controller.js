require('../config/config.js');
const twitterModels = require('./twitter-model.js');
var sentiment = require('sentiment');
var TwitterStreamChannels = require('twitter-stream-channels');

var credentials = {
  "consumer_key": process.env['consumer_key'],
  "consumer_secret": process.env['consumer_secret'] ,
  "access_token": process.env['access_token'],
  "access_token_secret": process.env['access_token_secret']
};


var client = new TwitterStreamChannels(credentials);



////////////////////////////////////////////////////////////
// Stream tweets separated into channels/keywords
// While connection is open, keep doing something
////////////////////////////////////////////////////////////

var channels = {
  'nintendo' : ['nintendo'],
  'google' : ['google'],
  'ford': ['ford'],
  'disney': ['disney'],
  'genentech': ['genentech'],
  'gold': ['gold'],
  'negative': ['sell', 'volatility', 'panic', 'hedge'],
  'markets': ['dow', 's&p', 'stocks'],
};

var stream = client.streamChannels({track:channels});

for(topic in channels) {
  var channel = 'channels/' + topic;
  stream.on(channel, function(tweet){
    // var tag = topic;
    //
    // var sentimentData = sentiment(tweet.text);
    // console.log(typeof sentimentData.score, sentimentData.score);
    // if(sentimentData.score !== 0 ) {
    //   twitterModels.Tweet.create({ tweet: tweet.text, sentiment: sentimentData.score, tag: tag});
    // }
  });
}
