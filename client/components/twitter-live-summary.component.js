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
    var data = this.props.twitterData.map(function(obj, index, collection){
      return {x: index + 1,
              y: (obj.data.slice( intervals ).reduce(function(a, b){
                    return a + b.numTweets;
                  }, 0) / -intervals),
              label: obj.keyword}; //find avg volume for 'this.state.test' number of intervals
    })

    var chart = <VictoryBar
      height={300}
      padding={75}
      style={{
        labels: {fontSize: 10}
      }}
      data={[
        {x: 1, y: data[0].y, fill: "gold", label: data[0].label},
        {x: 2, y: data[1].y, fill: "orange", label: data[1].label},
        {x: 3, y: data[2].y, fill: "tomato", label: data[2].label},
        {x: 4, y: data[3].y, fill: "pink", label: data[3].label},
        {x: 5, y: data[4].y, fill: "magenta", label: data[4].label},
        {x: 6, y: data[5].y, fill: "purple", label: data[5].label},
        {x: 7, y: data[6].y, fill: "blue", label: data[6].label},
        {x: 8, y: data[7].y, fill: "teal", label: data[7].label}
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