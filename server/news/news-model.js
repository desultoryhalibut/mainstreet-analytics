const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  timestamp: { type: Date, required: true },
  title: { type: String, required: true, unique: true }
})

// newsSchema.set('timestamps', true);

const News = mongoose.model('News', newsSchema);

module.exports = News;


