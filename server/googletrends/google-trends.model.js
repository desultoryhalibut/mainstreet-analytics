const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleTrends = new Schema({
  keyword: {type: String},
  searchVolume: {type: Array}
});

const GoogleTrends = mongoose.model('GoogleTrends', googleTrends);

module.exports = GoogleTrends;
