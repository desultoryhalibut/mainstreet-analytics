import React, { Component } from 'react';
import LineChart from './linechart.component';

const GoogleTrends = (props) => {
  console.log('Google Trends Component ', props.googleTrendsData);

  if (!props.googleTrendsData) {
    return <div>Loading...</div>
  }


  return (
    <div className="google-trends-chart">
      Google Trends Data Here
      <LineChart data={props.googleTrendsData}/>
    </div>
  );
}

export default GoogleTrends;
