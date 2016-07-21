import React, { Component } from 'react';
import GoogleTrends from './googletrends.component';
import LineGraph from './googletrends.component.test';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      googleTrendsData: null
    };
  }

  componentWillMount() {
    fetch('api/googletrends', {method: 'GET'})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({googleTrendsData: data});

      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Main Street Analytics</h1>
        <LineGraph />
        // <GoogleTrends googleTrendsData={this.state.googleTrendsData} />
      </div>
    );
  }
}
