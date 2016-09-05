import React, { Component } from 'react';
import LineChart from './linechart.component';
import CentralAxis from './barchart.component';
import { VictoryPie, VictoryChart, VictoryLine, VictoryAxis, VictoryBar } from 'victory';

class SentimentTrends extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.sentimentData,
      currentChart: 'economic',
      currentCompany: 'disney'
    }
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick(event) {
      // var data = this.state.data.filter(function(item) {
      //   return item.keyword === event;
      // });
      this.setState({currentChart: event.target.value});
      console.log('this state set to:',this.state)
    }

    filterBy(criteria) {
      //by company, by economic indicators, by company
      //economic indicators:
      const economicInd = ['car', 'unemployment', 'inflation', 'real estate', 'acquisition', 'restaurants', 'dow jones', 'economy', 'consumer spending']
      //filter by results that are not in the list above
      if (criteria === 'company') {
        var data = this.props.sentimentData.filter(function(obj) {
          return (economicInd.indexOf(obj.keyword) === -1)
        })
      } else if (criteria === 'economic') {
        var data = this.props.sentimentData.filter(function(obj) {
          return (economicInd.indexOf(obj.keyword) > -1)
        });
      } else {
        //need to insert API call to server to get from News database
        var data = this.props.sentimentData.filter(function(item) {
          return item.keyword === criteria;
        });
      }
      return data;
    }

    renderBarChart(data) {
      console.log('rendering bar chart with data:',data)
      return <CentralAxis
        data={data}
    label={'keyword'}
    y={'sentimentScore'}
    x={1}
    height={400}
    width={600}
    // currentCompany={this.props.currentCompany}
    />;
    }

  render() {
    let partial;

    if (!this.props.sentimentData) {
      return (
        <p>Loading Sentiment Data...</p>
      );
    }


    var currentData = this.filterBy(this.state.currentChart);
    if (this.state.currentChart === 'economic') {
      console.log('this.state.currentChart:',this.state.currentChart, 'current Data:',currentData)
      partial = this.renderBarChart(currentData)
    } else if (this.state.currentChart === 'company') {
      partial = this.renderBarChart(currentData)
    }

    return (
      <section className="sentiments">
        {partial}
      </section>
    )
  }

}


export default SentimentTrends;
