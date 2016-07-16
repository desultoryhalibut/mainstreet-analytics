var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tSentimentSchema = new Schema({
  newsTopic: {type: String},
  volume: {type: Number},
  sentimentScore: {type: String},
  type: {type: String},
  interval: {type: Number}
})

tSentimentSchema.set('timestamps', true);

var TSentiment = mongoose.model('TSentiment', tSentimentSchema);

module.exports = TSentiment;
