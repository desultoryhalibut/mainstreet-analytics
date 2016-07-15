var News = require('./news-model');



module.exports = {
  get: function(req, res) {
    res.send(News);
  }
}