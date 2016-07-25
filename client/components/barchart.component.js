import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine, VictoryBar, VictoryStack, VictoryAxis, VictoryLabel, VictoryAnimation } from 'victory';

class CentralAxis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sentimentData: null
    }
  }


  sortedList(list) {
    let data = list.sort(function(a,b) {
      return a.sentimentScore > b.sentimentScore ? 1 : -1;
    })
    return data;
  }

  filterByCompany() {
    const economicInd = ['car', 'unemployment', 'inflation', 'real estate', 'acquisition', 'restaurants', 'dow jones', 'economy', 'panic', 'consumer spending']
    let data = this.props.data.filter(function(obj) {
      return (economicInd.indexOf(obj.keyword) === -1)
    })
    return data;
  }

  render() {
    var length = this.props.data.length;

    return (

      <div className='bar-chart'>
      <svg width={600} height={400}>
      <VictoryChart
        domainPadding={{x:30}} >
      <VictoryLine
        style={{
          axis: {strokeWidth: .5},
          grid: {strokeWidth: .5}
        }}
        data={[
          {x: 0, y:0},
          {x: 1, y:0},
          {x: 2, y:0},
          {x: 3, y:0},
          {x: 4, y:0},
          {x: 5, y:0},
          {x: 6, y:0},
          {x: 7, y:0},
          {x: 8, y:0},
          {x: 9, y:0},
        ]}
      />
      <VictoryAxis dependentAxis
        orientation="left"
        style={{
          axis: {strokeWidth: .5},
          fontSize: 8,
          ticks: {stroke: "transparent"},
          label: "Sentiment Score"
        }}/>


       </VictoryChart>

         <VictoryBar
           height={450}
           padding={45}
           style={{
             data: {
               width: 10,
               fill: (data) => data.y > 0 ? "blue" : "tomato"
             },
             labels: {
               padding: 5,
               fontSize: 8
             }
            }}
          //  domain={ {x: [0, {length}], y: [-1, 1]} }
           data={this.props.data.map((obj, idx) => {
              if (obj.keyword !== 'panic') {
                return {
                  x: 1+idx,
                  y: + obj.sentimentScore,
                  label: obj.keyword.toUpperCase()+'('+obj.sentimentScore.toFixed(2)+')'
                }
              } else return {
                x: idx,
                y: 0
              }
            })}
          />
        </VictoryChart>
      </svg>
      </div>
    );
  }
}

export default CentralAxis;
