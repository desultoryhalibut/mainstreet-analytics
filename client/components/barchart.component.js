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
            data={this.props.data.map(function(obj, idx) {
                
              return {
                x: 1+idx,
                y: + obj.sentimentScore,
                label: obj.newsTopic.toUpperCase()
              }
            })}
          />   
        </VictoryChart>
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


      // </div>
    );
  }
}

export default CentralAxis;
