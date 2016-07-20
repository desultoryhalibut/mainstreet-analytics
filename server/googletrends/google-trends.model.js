const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let googleTrends = new Schema({
  keyword: {type: String, unique: true},
  searchVolume: {type: Array, unique: true}
});

let GoogleTrends = mongoose.model('GoogleTrends', googleTrends);

module.exports = GoogleTrends;
