var Twitter = require('twitter');
var twitterStream  = {
  twitterConnect: function() {
    /*********************************************************
    * Create Twitter client connection
    *********************************************************/
    var client = new Twitter({
      consumer_key: process.env.twitter_key,
      consumer_secret: process.env.twitter_secret,
      access_token_key: process.env.twitter_token_key,
      access_token_secret: process.env.twitter_token_secret
    });
    /*********************************************************
    * Stream statuses filtered by keyword
    * As long as the the connection is open keep doing something
    *********************************************************/
    client.stream('statuses/filter', {track: 'nintendo'},  function(stream) {
      stream.on('data', function(tweet) {
        console.log(tweet.text);
      });

      stream.on('error', function(error) {
        console.log(error);
      });
    });
  }
};

module.exports = twitterStream;
