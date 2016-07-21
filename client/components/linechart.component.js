import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine } from 'victory';

class LineChart extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <VictoryChart>
        <VictoryLine
  y={(data) => 0.5 * data.x * data.x}/>
        </VictoryChart>
      </div>
    );
  }

}

export default LineChart;
