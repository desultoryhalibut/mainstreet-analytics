const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var tweetSchema = mongoose.Schema({
    tweet: Object,
    sentiment: String,
    tag: String
}); 

var Tweet = mongoose.model('Tweet', tweetSchema); 

module.exports = Tweet;
// migrate schemas from twitter-controller to here
