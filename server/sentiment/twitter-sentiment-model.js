var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tSentimentSchema = new Schema({
  topic: {type: String},
  volume: {type: Number},
  score: {type: String},
  interval: {type: Number}
})

tSentimentSchema.set('timestamps', true);

var TSentiment = mongoose.model('TSentiment', tSentimentSchema);

module.exports = TSentiment;
