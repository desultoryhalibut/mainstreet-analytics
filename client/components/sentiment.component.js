import React, { Component } from 'react';
import LineChart from './linechart.component';
import CentralAxis from './barchart.component';
import { VictoryPie, VictoryChart, VictoryLine, VictoryAxis } from 'victory';

class SentimentTrends extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.sentimentData
    }
  }


  render() {
    if (!this.props.sentimentData) {
      return (
        <p>Loading Sentiment Data...</p>
      );
    }

    return (
<<<<<<< dfb2e261f853bfe7c5e231af29f74a004e3ac6b7
      <div className="sentiment-chart">
        <h2>Consumer/Economic Sentiment - News in Past Two Months</h2>
        <CentralAxis 
          data={this.props.sentimentData}
          x={'newsTopic'}
          y={'sentimentScore'}
          height={300}
          width={500}
        />

      </div>
=======
      <section className="sentiments">
        <div className="center-content">
          <div className="grid row">
            <h2>Consumer/Economic Sentiment - News in Past Two Months</h2>
            <div className="graph column--heavy col-md-8">
              <div className="sentiment-chart">
                <CentralAxis
                  data={this.props.sentimentData}
                  x={'newsTopic'}
                  y={'sentimentScore'}
                  height={300}
                  width={500}
                />
              </div>
            </div>

            <div className="google-summary col-md-4 card card-block">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
        </div>
      </section>
>>>>>>> Feat: Add route for GoogleTrends company search
    )
  }

}


export default SentimentTrends;
