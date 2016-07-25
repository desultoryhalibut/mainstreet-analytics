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
      this.setState({currentChart: event.target.value});
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
    renderCompanyInfo(data) {
      return (<div className="card">
        <h3 className="card-header white-text grey">Company Info</h3>


            {data.map(item => {
              if (item.keyword === 'panic') {
                return
              } else {
                return (
                <div className="card-block">
                  <h5 className="card-title"> {item.keyword} </h5>
                  <ul className="card-text">
                    <li>
                      <strong>Volume (# Articles in 2016):</strong> {item.hits + '\n'}
                    </li>
                    <li>
                      <strong>Avg Sentiment:</strong> {item.sentimentScore + '\n'}
                    </li>
                    <li>
                      <strong>News Headlines:</strong> {item.data[0].headline.print_headline + '\n' + item.data[1].headline.print_headline  + '\n' + item.data[2].headline.print_headline + '\n'}
                    </li>
                  </ul>
                </div>

                )
              }
            })}

      </div>)
    }

  render() {
    let partial;
    let company

    if (!this.props.sentimentData) {
      return (
        <p>Loading Sentiment Data...</p>
      );
    }
    console.log('this.state.currentChart: ',this.state.currentChart, '\n this props data is:',this.props.sentimentData)

    var currentData = this.filterBy(this.state.currentChart);
    partial = this.renderBarChart(currentData)
    if (this.state.currentChart === 'economic') {

    } else if (this.state.currentChart === 'company') {
      company = this.renderCompanyInfo(currentData)
    }
    return (

      <section className="news-sentiment">
        <div className="row quote">
          <quote>
            In simulated trading experiments, average returns based on <span className='stand-out'>predictions from
            news sentiment scores outperformed </span>
            that of well-known trading experts.
          </quote> <small>~ Schumaker and Chen: A Quantitive Stock Prediction System Based on Financial News </small>
        </div>
        <div className="center-content">
          <div className="row">
            <h4><strong> 2016 News Sentiment</strong></h4>
            <div className="col-md-7">
              <div className="sentiment-chart">
                {partial}
              </div>
              <nav className="google-trends-nav">
              <button onClick={this.handleClick} value="economic" className="btn btn-warning btn-rounded waves-effect">Economic Indicators</button>
              <button onClick={this.handleClick} value="company" className="btn btn-warning btn-rounded waves-effect">Company</button>
              </nav>
            </div>

            <div className="col-md-5">
              <div className="card">
                <h3 className="card-header"> Sentiment-Oriented Stock Trading </h3>
                <div className="card-block">
                  <h4 className='card-title'> Go long on positive sentiment stocks, short on negative
                  </h4>
                  <p className='card-text'>
                   <ul>
                     <li><strong>Sentiment scores</strong>: Quantified averages of favorable (positive) and unfavorable (negative) words in the news for each entity </li>
                     <li>Scores range from <strong> -1</strong> to <strong> 1</strong> </li>
                     <li><strong>Shown to the left: </strong>Economic indicators of market health and four top companies by industry</li>
                     <li></li>
                   </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-5 ">
              {company}
            </div>

          </div>
        </div>
      </section>
    )
  }

}


export default SentimentTrends;
