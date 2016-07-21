const GoogleTrends = require('./google-trends.model');
const googleTrends = require('google-trends-api');

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
  },

  // finish this routing
  getCompany: function(company, req, res) {

    googleTrends.trendData(company)
      .then(function(results) {

        res.json(results);
      })
      .catch(function(err) {
        console.error('Error retrieving Google Trends data', err);
      });
  }

};
