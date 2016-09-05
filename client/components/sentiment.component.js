import React, { Component } from 'react';
import LineChart from './linechart.component';
import CentralAxis from './barchart.component';
import { VictoryPie, VictoryChart, VictoryLine, VictoryAxis } from 'victory';

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
      console.log('filtered data:',data);
      return data;
    }

    renderBarChart(data) {
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
      console.log('this.props.sentiment data in sentiment still not loading')
      return (
        <p>Loading Sentiment Data...</p>
      );
    }
    console.log('this.state.currentChart: ',this.state.currentChart, '\n this props data is:',this.props.sentimentData)

    var currentData = this.filterBy(this.state.currentChart);
    if (this.state.currentChart === 'economic') {
      partial = this.renderBarChart(currentData)
    } else if (this.state.currentChart === 'company') {
      partial = this.renderBarChart(currentData)
    }
    return (


      <section className="sentiments">
        {/* <div className="row quote">
          <quote>
            In simulated trading experiments, average returns based on predictions from
            <span className='stand-out'>news sentiment scores outperformed </span>
            that of well-known trading experts.
          </quote> <small>~ Schumaker and Chen: A Quantitive Stock Prediction System Based on Financial News </small>
        </div> */}
        <div className="center-content">
          <div className="row">
            <h4><strong> 2016 News Headlines</strong></h4>
            <div className="col-md-8">
            <nav className="google-trends-nav">
              <button onClick={this.handleClick} value="economic" className="btn btn-warning btn-rounded waves-effect">Economic Indicators</button>
              <button onClick={this.handleClick} value="company" className="btn btn-warning btn-rounded waves-effect">Company</button>
            </nav>
              {/* <div className="sentiment-chart">

                {partial}
              </div> */}
            </div>



            {/* <div className="col-md-4">
              <div className="card">
                <h3 className="card-header red white-text">{ Tips }</h3>
                <div className="card-block">
                  <h4 className='card-title'> Buy on bad news, sell on good news
                  </h4>
                  <p className='card-text'>
                   <ul>
                     <li><strong>Why: </strong>Insiders tend to buy stocks in years when news sentiment is pessimistic (negative score)</li>
                     <li><strong>Sentiment scores </strong> range from -1 to 1, -1 being the most negative, 1 being the most positive score</li>

                   </ul>



                  </p>
                </div> */}
              </div>
            </div>

            {/* <div className="col-md-4">
              <div className="card">
                <h3 className="card-header red white-text">{this.props.sentimentData[0].keyword.toUpperCase() }</h3>

                <div className="card-block">
                  <h4 className='card-title'>
                    {this.props.sentimentData[9].keyword.toUpperCase()}
                  </h4>
                  <p className='card-text'>
                   <ul>
                     <li><strong># Articles: </strong>{this.props.sentimentData[9].hits + '\n'}</li>
                     <li><strong>Sentiment Score: </strong>{this.props.sentimentData[9].sentimentScore + '\n'}</li>
                     <li><strong>Headlines: </strong>{this.props.sentimentData[9].data[0].headline.print_headline + '\n' +
                       this.props.sentimentData[9].data[1].headline.print_headline}

                    </li>
                   </ul>
                  </p>
                </div>
              </div>
            </div> */}
          {/* </div>
        </div> */}
      </section>
    )
  }

}


export default SentimentTrends;
