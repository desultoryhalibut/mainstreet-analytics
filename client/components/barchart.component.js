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


  render() {
    var length = this.props.data.length;

    return (

      <div className='bar-chart'>
      <svg width={650} height={500}>

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
      </svg>
      </div>

    );
  }
}

export default CentralAxis;
