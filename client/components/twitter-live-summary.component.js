import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine, VictoryBar, VictoryAxis } from 'victory';

class TwitterLiveSummary extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      intervals: -1 // units of time from tail to look back and display, decided by user
    }

    this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler(event){
    this.setState({intervals: +event.target.value});
  }
 

  render() {

    if (!this.props.twitterData) {
      return (
        <div>Loading Twitter Volume data...</div>
      );
    }

    var intervals = this.state.intervals;
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

      <div className="twitter-live-summary">
        
        <h4>TwitterLiveSummary Component (update choices once chron job enabled)</h4>
          {chart}
        <button onClick={this.clickHandler} value="-1">1 Minute</button>
        <button onClick={this.clickHandler} value="-3">3 Minutes</button>
        <button onClick={this.clickHandler} value="-5">5 Minutes</button>

      </div>
    )
  }
}

export default TwitterLiveSummary;