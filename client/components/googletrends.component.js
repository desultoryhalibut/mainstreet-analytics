import React, { Component } from 'react';
import LineChart from './linechart.component';

class GoogleTrends extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentChart: 'car',
      data: this.props.googleTrendsData,
      companyGoogleTrendsData: this.props.companyGoogleTrendsData
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({currentChart: event.target.value});
  }

  renderLineChart(index, color) {
    return <LineChart
      data={this.props.googleTrendsData[index].searchVolume}
      keyword={this.props.googleTrendsData[index].keyword}
      x={'date'}
      y={'volume'}
      height={300}
      width={600}
      color={color}
    />;
  }

  render() {
    let partial;

    if (!this.props.googleTrendsData) {
      return (
        <div>Loading Google Trends data...</div>
      );
    }

    if (this.state.currentChart === 'car') {
      partial = this.renderLineChart(0, 'red');

    } else if (this.state.currentChart === 'hedge') {
      partial = this.renderLineChart(2, 'blue');

    } else if (this.state.currentChart === 'dow jones') {
      partial = this.renderLineChart(1, 'green');

    } else if (this.state.currentChart === 'unemployment') {
      partial = this.renderLineChart(3, 'yellow');

    } else if (this.state.currentChart === 'panic') {
      partial = this.renderLineChart(4, 'orange');

    } else if (this.state.currentChart === 'real estate agent') {
      partial = this.renderLineChart(5, 'black');

    } else if (this.state.currentChart === 'inflation') {
      partial = this.renderLineChart(6, 'gray');

    } else if (this.state.currentChart === 'restaurant') {
      partial = this.renderLineChart(7, 'pink');
    }

    return (
      <section className="google-trends">
        <div className="row">
          <div className="col-md-8">
            <nav className="google-trends-nav">
              <button onClick={this.handleClick} value="car" className="btn btn-warning btn-rounded waves-effect">Car</button>
              <button onClick={this.handleClick} value="dow jones" className="btn btn-warning btn-rounded waves-effect">Dow Jones</button>
              <button onClick={this.handleClick} value="hedge" className="btn btn-warning btn-rounded waves-effect">Hedge</button>
              <button onClick={this.handleClick} value="panic" className="btn btn-warning btn-rounded waves-effect">Panic</button>
              <button onClick={this.handleClick} value="unemployment" className="btn btn-warning btn-rounded waves-effect">Unemployment</button>
              <button onClick={this.handleClick} value="real estate agent" className="btn btn-warning btn-rounded waves-effect">Real Estate Agent</button>
              <button onClick={this.handleClick} value="inflation" className="btn btn-warning btn-rounded waves-effect">Inflation</button>
              <button onClick={this.handleClick} value="restaurant" className="btn btn-warning btn-rounded waves-effect">Restaurant</button>
            </nav>

            <article>
              {partial}
            </article>
          </div>
          <div className="col-md-4">
            <div className="card">
                <h3 className="card-header red white-text">What are we looking at?</h3>
                <div className="card-block">
                    <h4 className="card-title">Google search trends can help you get a pulse on economic and market indicators</h4>
                    <p className="card-text">
                      <strong>Cars & Restaurants</strong>: Pulse on consumer spending
                      <br></br>
                      <strong>Real Estate Agent</strong>: Pulse on housing market demand
                      <br></br>
                      <strong>Unemployment</strong>: Pulse on jobs
                      <br></br>
                      <strong>Inflation</strong>: Pulse on inflation
                      <br></br>
                      <strong>Dow Jones</strong>: Pulse on market volatility
                      <br></br>
                      <strong>Hedge & Panic</strong>: Pulse on market fear
                    </p>

                </div>
            </div>
          </div>


        </div>
      </section>
    );
  }

}

export default GoogleTrends;


//
// <div className="google-summary col-md-4 card card-block">
//   <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
//   dummy text ever since the <span className="stand-out">1500</span>s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//   </p>
// </div>
