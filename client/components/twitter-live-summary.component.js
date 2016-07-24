import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine, VictoryBar, VictoryAxis } from 'victory';

class TwitterLiveSummary extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.twitterData
    }
  }


  render() {
    return(
      <div>
        Inside TwitterLiveSummary component
        {console.log('IN component: ', this.props.twitterData)}      
      </div>
    )
  }
}

export default TwitterLiveSummary;