require('../config/config.js');
var sentiment = require('sentiment');
var TwitterStreamChannels = require('twitter-stream-channels');
var credentials = {
  "consumer_key": process.env['consumer_key'],
  "consumer_secret": process.env['consumer_secret'] ,
  "access_token": process.env['access_token'],
  "access_token_secret": process.env['access_token_secret']
};

/*********************************************************
* mongoDB setup --> replace with digital ocean setup
*********************************************************/
mongoose = require('mongoose');
var uri = 'mongodb://QuinKinser:Ron1680.@ds031608.mlab.com:31608/leaderboards';
db = mongoose.connect(uri);

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  console.log('connected to the DB')
});

Schema = mongoose.Schema;

var tSchema = mongoose.Schema({
  tweet: {
    type: String,
    required: true
  },
  sentiment: {
    type: Number,
    required: true
  },
  tag: {
    type: String,
    required: true
  }
});

var tAverageSchema = mongoose.Schema({
  keyword: {
    type: String,
    required: true
  },
  numTweets: {
    type: Number,
    required: true
  },
  sentAverage: {
    type: Number,
    required: true
  },
  interval: {
    type: Date,
    default: Date.now
  }
});

var tAverageColSchema = mongoose.Schema({
  keyword: {
    type: String,
    data: Array
  }
});

var Tweet = mongoose.model('Tweet', tSchema);
var TweetAverage = mongoose.model('TweetAverage', tAverageSchema);
var TweetAverageCol = mongoose.model('TweetAverageCol', tAverageColSchema);

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
    //   Tweet.create({ tweet: tweet.text, sentiment: sentimentData.score, tag: tag});
    // }
  });
}
