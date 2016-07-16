const googleTrends = require('google-trends-api');
const CronJob = require('cron').CronJob;

// collect Google Trends data from Google Trends API

googleTrends.trendData(['debt', 'cars', 'hedge', 'hawaii', 'real estate agent', 'inflation', 'economy', 'bonds', 'restaurant', 'unemployment', 'sell', 'stocks', 'risk'])
  .then(function(results) {
    trendData_debt = results;
    console.log('debt data', results);
  })
  .catch(function(err) {
    console.error('trendData_debt', err);
  });
