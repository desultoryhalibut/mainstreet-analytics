import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine } from 'victory';

class TwitterChart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Twitter Chart</h2>
        <VictoryChart />
      </div>
    );
  }
}

export default TwitterChart;
