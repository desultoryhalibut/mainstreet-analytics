import React, { Component } from 'react';
import LineChart from './linechart.component';

class GoogleTrends extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentChart: this.props.googleTrendsData,
      data: this.props.googleTrendsData
    };

  }

  render() {

    if (!this.props.googleTrendsData) {
      return (
        <div>Loading Google Trends data...</div>
      );
    }

    return (
      <div className="google-trends-chart">
        Google Trends Data Here
        <LineChart
          data={this.props.googleTrendsData[0].searchVolume}
          x={'date'}
          y={'volume'}
          height={300}
          width={400}
        />
      </div>
    );
  }

}

export default GoogleTrends;
