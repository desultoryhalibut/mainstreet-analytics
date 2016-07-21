import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine, VictoryAxis } from 'victory';

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
          style={{
            tickLabels: {
              fill: 'red',
              fontSize: 8
            }
          }}
        >
          <VictoryLine
            data={this.props.data}
            x={this.props.x}
            y={this.props.y}
          />

          <VictoryAxis
            label='x-axis'
            standalone={false}
          />

        </VictoryChart>

      </div>
    );
  }

}

export default LineChart;
