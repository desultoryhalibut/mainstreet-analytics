import React, { Component } from 'react';
import { VictoryPie } from 'victory';

class LineChart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><VictoryPie /></div>
    );
  }

}

export default LineChart;
