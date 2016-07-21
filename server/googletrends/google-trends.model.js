const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let googleTrends = new Schema({
  keyword: {type: String},
  searchVolume: {type: Array}
});

let GoogleTrends = mongoose.model('GoogleTrends', googleTrends);

module.exports = GoogleTrends;
