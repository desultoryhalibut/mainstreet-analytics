import React, { Component } from 'react';

var entries = require('./twitter.seed.js');

// This component looks at the most recent time interval 
// and renders an image based on + - neutral sentiment

// Twitter is feeling 
//   {image}
// about {search} right this minute
class TwitterLive extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sentiment:, // score of most recent interval...use same data as twitter.component,,
      search: '' // search query or item chosen from dropdown
    };

  }

  render() {
    if (sentiment > 0.5) {
      // bullish
      return <img src={'http://bit.ly/2adciRq'} className="img-responsive"/>
    } else if (sentiment < -0.5){
      // bearish
      return <img src={'http://bit.ly/2a0Yese'} className="img-responsive"/>
    } else {
      // neutral
      return <img src={'http://bit.ly/2a0hubG'} className="img-responsive"/>
    }
  }

}

export default TwitterLive;