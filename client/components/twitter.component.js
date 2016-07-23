import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine } from 'victory';

class TwitterChart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">

        <div className="row">
          <section className="graph col-md-8 panel">
            <VictoryChart height={200} width={300}/>
          </section>

          <section className="trends col-md-4 panel">
            <article className="tweet-square orange col-sm-4">
              <span className="">796</span>
              <p>Tweets around the world</p>
            </article>
            <article className="tweet-square  red col-sm-4">
              <span className="">Sad</span>
              <p>Overall feeling</p>
            </article>

            <article className="tweet-square  brown col-sm-4">
              <p>Some interesting content</p>
              <span className=""></span>
            </article>
            <article className="tweet-square  gray col-sm-4">
              <p>Some interesting content</p>
              <span className=""></span>
            </article>

          </section>
        </div>
      </div>
    );
  }
}

export default TwitterChart;
