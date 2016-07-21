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
    	<VictoryChart>
    	  <VictoryLine
    	    style={{data:
    	      {stroke: "red", strokeWidth: 4}
    	    }}
    	    y={(data) =>
    	      Math.sin(2 * Math.PI * data.x)
    	    }
    	  />
    	  <VictoryLine
    	    style={{data:
    	      {stroke: "blue", strokeWidth: 4}
    	    }}
    	    y={(data) => Math.cos(2 * Math.PI * data.x)}
    	  />
    );
  }
}

export default TwitterChart;
