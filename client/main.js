import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleTrends from './components/googletrends.component';

export default class App extends Component {
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

  componentDidMount() {
    fetch('/api/googletrends')
      .then((res) => {
        this.setState({carsData: res[0].searchVolume});
        this.setState({realEstateData: res[1].searchVolume});
        this.setState({inflationData: res[2].searchVolume});
        this.setState({restaurantData: res[3].searchVolume});
        this.setState({unemploymentData: res[4].searchVolume});
        this.setState({dowData: res[5].searchVolume});
        this.setState({panicData: res[6].searchVolume});
        this.setState({hedgeData: res[7].searchVolume});
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

ReactDOM.render(<App />, document.querySelector('#mainstreet'));
