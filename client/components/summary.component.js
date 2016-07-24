import React, { Component } from 'react';
import GoogleTrends from './googletrends.component';
import SentimentTrends from './sentiment.component';
import TwitterChart from './twitter.component';

class SummaryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      googleTrendsData: null,
      newsData: null,
      sentimentData: null,
      currentCompany: this.props.currentCompany
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

    //////NEWS SENTIMENT////////
    fetch('api/news/sentiment', {method: 'GET'})
      .then((res) => {
        console.log('fetch is working. Response:',res)
        return res.json();
      })
      .then((data) => {
        this.setState({sentimentData: data});

      })
      .catch((err) => {
        console.log(err);
      });

  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="section-headline col-md-12">
            <h3 className="ta-center"><i className="fa fa-twitter" aria-hidden="true"></i>What's Tweeting</h3>
          </div>
        </div>

        <TwitterChart currentCompany={this.state.currentCompany}/>

        <div className="row">
          <div className="section-headline col-md-12">
            <h3 className="ta-center">What's Being Searched</h3>
          </div>
        </div>

        <GoogleTrends googleTrendsData={this.state.googleTrendsData} currentCompany={this.state.currentCompany}/>

        <div className="row">
          <div className="section-headline col-md-12">
            <h3 className="ta-center">Market Sentiment</h3>
          </div>
        </div>

        <SentimentTrends sentimentData={this.state.sentimentData} currentCompany={this.state.currentCompany}/>

        <div className="row">
          <div className="footer-top col-md-12">

          </div>
          <div className="footer col-md-12">
            Footer text goes here
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryComponent;
