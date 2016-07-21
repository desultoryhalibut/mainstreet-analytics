var sentiment = require('sentiment');
var TwitterStreamChannels = require('twitter-stream-channels');
var credentials = require('./twitter.credentials.json');

/*********************************************************
* mongoDB setup --> replace with digital ocean setup
*********************************************************/
mongoose = require('mongoose');
var uri = 'mongodb://QuinKinser:Ron1680.@ds031608.mlab.com:31608/leaderboards';
db = mongoose.connect(uri);
var conn = mongoose.connection;
Schema = mongoose.Schema;

// once up and running, add additional data fields
var tweetSchema = mongoose.Schema({
    tweet: Object,
    sentiment: String,
    tag: String
}); 

var Tweet = mongoose.model('Tweet', tweetSchema);  
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  console.log('connected to the DB')
});


////////////////////////////////////////////////////////////
// Create Twitter client connection
////////////////////////////////////////////////////////////

var client = new TwitterStreamChannels(credentials);


////////////////////////////////////////////////////////////
// Stream tweets separated into channels/keywords
// While connection is open, keep doing something
////////////////////////////////////////////////////////////

// define channels and keywords to listen to in each channel
var channels = {
    "pokemon" : ['nintendo','pokemon'],
    "commodities" : ['gold','oil','crude'],
    "web" : ['javascript','nodejs','html5','css','angularjs']
};
 
var stream = client.streamChannels({track:channels});

stream.on('channels/pokemon',function(tweet){
  console.log(tweet);
  var tag = 'pokemon';
  var sentimentData = sentiment(tweet.text);
  var next = new Tweet({ tweet: tweet.text, sentiment: sentimentData.score, tag: tag  });
  next.save(function (err, next) {
    if (err) return console.error(err);
  });   
});
 
stream.on('channels/commodities',function(tweet){
  //console.log('>commodities',tweet.text); // logs tweets under this tag 
  var tag = 'commodities';
  var sentimentData = sentiment(tweet.text);
  var next = new Tweet({ tweet: tweet.text, sentiment: sentimentData.score, tag: tag  });
  next.save(function (err, next) {
    if (err) return console.error(err);
  });   
});
 
stream.on('channels/web',function(tweet){
  var tag = 'web';
  var sentimentData = sentiment(tweet.text);
  var next = new Tweet({ tweet: tweet.text, sentiment: sentimentData.score, tag: tag  });
  next.save(function (err, next) {
    if (err) return console.error(err);
  });   
});
