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
            axis: {stroke: "black"},
            grid: {strokeWidth: 2},
            ticks: {stroke: "red"},
            tickLabels: {fontSize: 8},
            axisLabel: {fontsize: 8}
          }}
        >
          <VictoryLine
            data={this.props.data}
            x={this.props.x}
            y={this.props.y}
          />

          <VictoryAxis
            label="x-axis"
            standalone={false}
            orientation="bottom"
          />

          <VictoryAxis dependentAxis
            tickValues={[0, 1.5, 3, 4.5]}
            style={{
              grid: {
                stroke: "grey",
                strokeWidth: 1
              },
              axis: {stroke: "transparent"},
              ticks: {stroke: "transparent"}
            }}
            label='x-axis'
            standalone={false}
          />
        </VictoryChart>

      </div>
    );
  }

}

export default LineChart;
