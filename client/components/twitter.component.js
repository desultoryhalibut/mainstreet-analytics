import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine, VictoryBar, VictoryAxis } from 'victory';

var entries = require('./twitter.seed.js');

class TwitterChart extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.twitterData
    }
  }

  getStyles() {
    return {
      parent: {
        boxSizing: "border-box",
        display: "block",
        width: "90%",
        height: "90%",
        padding: 50
      }
    };
  }

  render() {
    // return (
    //     <section className="twitter-component">
    //       <div className="row">
    //         <div className="col-md-8">
    //           <VictoryChart />
    //         </div>
    //         <div className="trends col-md-4">
    //           <div className="row">
    //             <article className="orange col-sm-6">
    //               <span className="">796</span>
    //               <p>Tweets around the world</p>
    //             </article>
    //             <article className="red col-sm-6">
    //               <span className="">Sad</span>
    //               <p>Overall feeling</p>
    //             </article>
    //           </div>

    //           <div className="row">
    //             <article className="brown col-sm-6">
    //               <p>Some interesting content</p>
    //               <span className=""></span>
    //             </article>
    //             <article className="gray col-sm-6">
    //               <p>Some interesting content</p>
    //               <span className=""></span>
    //             </article>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    // );

    if (!this.props.twitterData) {
      return (
        <div>Loading Twitter data for detail view component!</div>
      );
    }


    const styles = this.getStyles();
    return(
      <div>
        Inside TwitterChart component
      <svg style={styles.parent} viewBox="0 0 500 300">
            {/*  <VictoryAxis
                style={{
                  data: {
                    strokeWidth: 2
                  },
                  labels: {
                    fontSize: 16
                  }
                }}
                orientation="bottom"
                domain={[0, 25]}
                label="Time"
                standalone={false}
              />

              <VictoryAxis dependent
                style={{
                  axis: {stroke: "orange", strokeWidth: 2},
                  ticks: {stroke: "orange"},
                  tickLabels: {fontSize: 12}
                }}
                orientation="left"
                domain={[0, 1000]}
                label="Volume"
                standalone={false}
              />

              <VictoryAxis dependent
                style={{
                  axis: {stroke: "blue", strokeWidth: 2},
                  ticks: {stroke: "blue"},
                  tickLabels: {fontSize: 12}
                }}
                orientation="right"
                domain={[-10, 10]}
                label="Sentiment Score & Tweet Volume"
                standalone={false}
              />*/}

              <VictoryLine
                interpolation="cardinal"
                style={{
                  data: {
                    stroke: "orange",
                    strokeWidth: 1
                  },
                  labels: {fontSize: 8}
                }}
                data={entries.slice(-25)}
                x={"time"}
                y={"volume"}
                label="Number of Tweets"
                standalone={false}
              />

              <VictoryLine
                interpolation="cardinal"
                style={{
                  data: {
                    stroke: "blue",
                    strokeWidth: 1
                  },
                  labels: {fontSize: 8}
                }}
                data={entries.slice(-25)}
                x={"time"}
                y={"score"}
                label="Sentiment Score"
                standalone={false}
                fill={"teal"}
              />
            </svg>
            </div>
    )
  }
}

export default TwitterChart;

