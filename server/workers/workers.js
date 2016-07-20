const _ = require('lodash');
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

function QueryGoogleTrends(keyword, googleTrendResults) {
  let newData = {
    keyword: keyword,
    searchVolume: googleTrendResults
  };

  GoogleTrends.find({keyword: keyword}).exec()
    .then(function(found) {
      if (found.length > 0) {
        GoogleTrends.update({keyword: keyword}, newData);
        console.log(`Updated Google Trends for ${keyword}`);
      } else {
        GoogleTrends.create(newData);
      }
    });
}

/**
 * Updates database for GoogleTrends Summary keywords for dashboard view
 * @param  {[Array]} KEYWORDS [Array of keywords]
 */

googleTrends.trendData(KEYWORDS)
  .then(function(results) {

    _(KEYWORDS).forEach((keyword, index) => {
      QueryGoogleTrends(keyword, results[index]);
    });

  })
  .catch(function(err) {
    console.error('Error updating Google Trends ', err);
  });



  // googleTrends.trendData(['car', 'real estate agent', 'inflation', 'restaurant', 'unemployment', 'dow jones', 'hedge', 'panic'])
  //   .then(function(results) {
  //     let carsTrend = results[0];
  //     let realEstateTrend = results[1];
  //     let inflationTrend = results[2];
  //     let restaurantTrend = results[3];
  //     let unemploymentTrend = results[4];
  //     let dowTrend = results[5];
  //     let hedgeTrend = results[6];
  //     let panicTrend = results[7];
  //
  //     console.log(results);
  //
  //     GoogleTrends.create({
  //       keyword: 'car',
  //       searchVolume: carsTrend
  //     });
  //
  //     GoogleTrends.create({
  //       keyword: 'real estate agent',
  //       searchVolume: realEstateTrend
  //     });
  //
  //     GoogleTrends.create({
  //       keyword: 'inflation',
  //       searchVolume: inflationTrend
  //     });
  //
  //     GoogleTrends.create({
  //       keyword: 'restaurant',
  //       searchVolume: restaurantTrend
  //     });
  //
  //     GoogleTrends.create({
  //       keyword: 'unemployment',
  //       searchVolume: unemploymentTrend
  //     });
  //
  //     GoogleTrends.create({
  //       keyword: 'dow jones',
  //       searchVolume: dowTrend
  //     });
  //
  //     GoogleTrends.create({
  //       keyword: 'hedge',
  //       searchVolume: hedgeTrend
  //     });
  //
  //     GoogleTrends.create({
  //       keyword: 'panic',
  //       searchVolume: panicTrend
  //     });
  //
  //
  //
  //   })
  //   .catch(function(err) {
  //     console.error('trendData_debt', err);
  //   });
