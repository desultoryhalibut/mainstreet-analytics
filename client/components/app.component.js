import React, { Component } from 'react';
import SummaryComponent from './summary.component';
import CompanyComponent from './company.component';
import NavBar from './nav-bar.component';
import Footer from './footer.component';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCompany: null,
      companyGoogleTrendsData: null,
      isSummary: true,
      twitterData: null
    }
    this.selectCompany = this.selectCompany.bind(this);
    this.fetchTweets = this.fetchTweets.bind(this);
  }

  selectCompany(company) {
    this.setState({currentCompany: company.toLowerCase(), isSummary: false});

    // fetch company specific Google Trends data directly from API
    fetch('api/googletrends/' + company, {method: 'GET'})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({companyGoogleTrendsData: data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchTweets () {
    var self = this;
      fetch('api/twitter', {method: 'GET'})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('SETTINGSTATE', data);
        this.setState({twitterData: data}).bind(self);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillMount() {
    setInterval(this.fetchTweets, 5000);
  }

  render() {
    var partial;
    if (this.state.isSummary) {
      partial = <SummaryComponent twitterData={this.state.twitterData} />
    } else {
      partial = <CompanyComponent companyGoogleTrendsData={this.state.companyGoogleTrendsData} currentCompany={this.state.currentCompany} twitterData={this.state.twitterData} />
    }

    return (
      <div>
        <header>
          <NavBar selectCompany={this.selectCompany}/>
        </header>

        <div className="main-content z-depth-5">

          {partial}

        </div>
        <Footer />
      </div>
    );
  }
}
