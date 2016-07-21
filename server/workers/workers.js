const googleTrends = require('google-trends-api');
const GoogleTrends = require('../googletrends/google-trends.model');
// future CronJob implementation to run monthly
// const CronJob = require('cron').CronJob;

// Keywords for Dashboard Summary view
const KEYWORDS = ['car', 'real estate agent', 'inflation', 'restaurant', 'unemployment', 'dow jones', 'hedge', 'panic'];

/**
 * QueryGoogleTrends - Helper function to seed data from GoogleTrends API to database
 * @param {[string]} keyword         [keyword to search for]
 * @param {[Array]} googleTrendData [return data from googleTrends search]
 */

 function reformatTrendsData(trendsData) {
   return trendsData.map(item => {
     for (var key in item) {
       let obj = {};
       obj['date'] = key;
       obj['volume'] = item[key];
       return obj;
     }
   });
 }

function queryGoogleTrends(key, googleTrendResults) {
  let reformatData = reformatTrendsData(googleTrendResults);

  let newData = {
    'keyword': key,
    'searchVolume': reformatData
  };

  GoogleTrends.find({'keyword': key})
    .then(function(found) {
      if (found.length > 0) {
        GoogleTrends.update({'keyword': key}, newData);
        console.log(`Updated Google Trends for ${key}`, newData);
      } else {
        GoogleTrends.create(newData);
        console.log('created data', newData);
      }
    });
}

/**
 * Updates database for GoogleTrends Summary keywords for dashboard view
 * @param  {[Array]} KEYWORDS [Array of keywords]
 */

googleTrends.trendData(KEYWORDS)
  .then(function(results) {

    KEYWORDS.forEach((key, index) => {
      queryGoogleTrends(key, results[index]);
    });

  })
  .catch(function(err) {
    console.error('Error updating Google Trends ', err);
  });
