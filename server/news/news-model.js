const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let newsSchema = new Schema({
  timestamp: { type: Date, required: true },
  title: { type: String, required: true, unique: true }
})

// newsSchema.set('timestamps', true);

let News = mongoose.model('News', newsSchema);

module.exports = News;


