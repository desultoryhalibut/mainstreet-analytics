import React, { Component } from 'react';
import GoogleTrends from './googletrends.component';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      googleTrendsData: {
        carsData: [],
        realEstateData: [],
        inflationData: [],
        restaurantData: [],
        unemploymentData: [],
        dowData: [],
        panicData: [],
        hedgeData: []
      }
    };
  }

  componentWillMount() {
    fetch('api/googletrends', {method: 'GET'})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('googleTrends BLOB', data);
        this.setState({carsData: data[0].searchVolume});
        this.setState({realEstateData: data[1].searchVolume});
        this.setState({inflationData: data[2].searchVolume});
        this.setState({restaurantData: data[3].searchVolume});
        this.setState({unemploymentData: data[4].searchVolume});
        this.setState({dowData: data[5].searchVolume});
        this.setState({panicData: data[6].searchVolume});
        this.setState({hedgeData: data[7].searchVolume});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Main Street Analytics</h1>
        <GoogleTrends googleTrendsData={this.state.googleTrendsData} />
      </div>
    );
  }
}
