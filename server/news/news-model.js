var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  
})

newsSchema.set('timestamps', true);

var News = mongoose.model('News', newsSchema);

module.exports = News;