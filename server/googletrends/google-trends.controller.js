const GoogleTrends = require('./google-trends.model');

module.exports = {

  // Handle GET request from client for Google Trends data
  get: function(req, res) {
    GoogleTrends.find().exec()
    .then(function(trends) {
      res.json(trends);
    })
    .catch(function(err) {
      res.send('Error getting Google Trends', err);
    });
  }

};
