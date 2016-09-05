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
    var topic = this.props.currentCompany || 'economic';
    var length = this.props.data.length
    return (

      <div className='bar-chart'>
      <svg width={650} height={350}>

       <VictoryChart horizontal
         height={375}
         width={550}
         padding={{
           top: 40,
           bottom: 40,
           left: 40,
           right: 40
         }}
         domain={{ x: [0, {length}], y: [-1, 1] }}
         domainPadding={{x: 15}}
        >
        <VictoryAxis
          orientation='right'
          style={{
            axis: {stroke: "transparent"},
            ticks: {stroke: "transparent"}
          }}
        />
         <VictoryBar horizontal
           style={{
             data: {
               width: 10,
               labels: {
                 padding: 10,
                 fontSize: 10,
                 fontFamily:'Roboto'
               },
               fill: (data) => data.y > 0 ?
                 "gold" : "blue"
             }
           }}

           data={this.props.data.map((obj, idx) => {

              if (obj.keyword !== 'panic') {
                return {
                  x: 1+idx,
                  y: + obj.sentimentScore,
                  label: obj.keyword.toUpperCase()
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

      //       data={this.props.data.map(function(obj, idx) {
      //
      //         return {
      //           x: 1+idx,
      //           y: + obj.sentimentScore,
      //           label: obj.newsTopic.toUpperCase()
      //         }
      //       })}
      //     />
      //   </VictoryChart>
      //
      // </svg>

      // </div>
    );
  }
}

export default CentralAxis;
