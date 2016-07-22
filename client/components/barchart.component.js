import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine, VictoryBar, VictoryStack, VictoryAxis, VictoryLabel } from 'victory';

class CentralAxis extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      // <div className='bar-chart'>
      <svg width={500} height={350}>
        <VictoryChart horizontal
          height={350}
          width={500}
          padding={40}
          domain={{x:[-1.2,1.2], y:[0,7]}}
          style={{
            data: {width: 50},
            labels: {fontSize: 12}
          }}
          padding={{
            top: 20,
            bottom: 60,
            left: 20,
            right: 20
          }}
          domainPadding={{x: 15}}>
          <VictoryAxis
            label="Sentiment"
            orientation="bottom"/>
          <VictoryAxis 
            domain={{y:[0, 5]}}
            tickValues={[-1, -0.75, -0.5, -.25, 0, .25, .50, .75, 1]}
            style={{
              labels: {fontSize: 9},
              grid: {
                stroke: "grey",
                strokeWidth: 1
              },
              axis: {stroke: "transparent"},
              ticks: {stroke: "transparent"}
            }}/>
          <VictoryBar horizontal
            style={{
              data: {
                width: 17,
                labels: { padding: 5, fontSize:10 },
                fill: (data) => data.y > 0 ?
                  "gold" : "blue"
              }
            }}
            data={[
              {x: 1, y: -0.51, label:'EMPLOYMENT'},
              {x: 2, y: -0.2, label: 'ECONOMY'},
              {x: 3, y: -0.06, label: 'BUSINESS CONDITIONS'},
              {x: 4, y: 0.13, label: 'GOLD'},
              {x: 5, y: 0.46, label: 'CONSUMER SPENDING'},
              {x: 6, y: 0.52, label: 'INCOME'},
              {x: 7, y: 0.9, label: 'RESTAURANTS'},
            ]}
          />   
        </VictoryChart>
        

      </svg>
      // </div>
    );
  }
}

export default CentralAxis;
