import React, { Component } from 'react';
import LineChart from './linechart.component';

class GoogleTrends extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentChart: 'car',
      data: this.props.googleTrendsData
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({currentChart: event.target.value});
  }

  render() {
    let partial;

    if (!this.props.googleTrendsData) {
      return (
        <div>Loading Google Trends data...</div>
      );
    }

    if (this.state.currentChart === 'car') {
      partial = <LineChart
        data={this.props.googleTrendsData[0].searchVolume}
        keyword={this.props.googleTrendsData[0].keyword}
        x={'date'}
        y={'volume'}
        height={300}
        width={600}
        color={'pink'}
      />
    } else if (this.state.currentChart === 'hedge') {
      partial = <LineChart
        data={this.props.googleTrendsData[2].searchVolume}
        keyword={this.props.googleTrendsData[2].keyword}
        x={'date'}
        y={'volume'}
        height={300}
        width={600}
        color={'blue'}
      />
    } else if (this.state.currentChart === 'dow jones') {
      partial = <LineChart
        data={this.props.googleTrendsData[1].searchVolume}
        keyword={this.props.googleTrendsData[1].keyword}
        x={'date'}
        y={'volume'}
        height={300}
        width={600}
        color={'orange'}
      />
    }

    return (
      <div className="google-trends-chart">
        <button onClick={this.handleClick} value="car">Car</button>
        <button onClick={this.handleClick} value="dow jones">Dow Jones</button>
        <button onClick={this.handleClick} value="hedge">Hedge</button>

          {partial}

      </div>
    );
  }

}

export default GoogleTrends;
