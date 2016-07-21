import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine } from 'victory';

class LineChart extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="line-chart">
        <VictoryChart
          height={this.props.height}
          width={this.props.width}
        >
          <VictoryLine
            data={this.props.data}
            x={this.props.x}
            y={this.props.y}
          />

        </VictoryChart>

      </div>
    );
  }

}

export default LineChart;
