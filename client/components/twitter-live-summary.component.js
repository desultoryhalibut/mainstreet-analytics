import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine, VictoryBar, VictoryAxis } from 'victory';

class TwitterLiveSummary extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      test: -2 // units of time from tail to look back and display, decided by user
    }
  }
  
 

  render() {

    if (!this.props.twitterData) {
      return (
        <div>Loading Twitter Volume data...</div>
      );
    }
    console.log('XXXYYY: ',this.state)
    var intervals = this.state.test;
    var yVals = this.props.twitterData.map(function(obj, index, collection){
      return (obj.data.slice( intervals ).reduce(function(a, b){
               return a + b.numTweets;
             }, 0) / -intervals); //find avg volume for 'this.state.test' number of intervals
    })
    
    var chart = <VictoryBar
      height={300}
      padding={75}
      style={{
        labels: {fontSize: 10}
      }}
      data={[
        {x: 1, y: yVals[0], fill: "gold", label: "query1"},
        {x: 2, y: yVals[1], fill: "orange", label: "query2"},
        {x: 3, y: yVals[2], fill: "tomato", label: "query3"},
        {x: 4, y: yVals[3], fill: "pink", label: "query4"},
        {x: 5, y: yVals[4], fill: "magenta", label: "query5"},
        {x: 6, y: yVals[5], fill: "purple", label: "query6"},
        {x: 7, y: yVals[6], fill: "blue", label: "query7"},
        {x: 8, y: yVals[7], fill: "teal", label: "query8"}
      ]}
    />

    return(
      <div>
        Inside TwitterLiveSummary component 
        {chart}    
      </div>
    )
  }
}

export default TwitterLiveSummary;