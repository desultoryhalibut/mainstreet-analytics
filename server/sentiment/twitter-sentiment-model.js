var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tSentimentSchema = new Schema({
  newsTopic: {type: String},
  relevance: {type: Number},
  sentimentScore: {type: String},
  type: {type: String},
  interval: {type: Number}
})

tSentimentSchema.set('timestamps', true);

var TSentiment = mongoose.model('TSeniment', tSentimentSchema);

module.exports = TSentiment;