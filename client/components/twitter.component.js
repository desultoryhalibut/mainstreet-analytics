import React, { Component } from 'react';
import { VictoryPie, VictoryChart, VictoryLine } from 'victory';

class TwitterChart extends Component {

  constructor(props) {
    super(props);
<<<<<<< 6197e57f6f98c2a4e44d340ace3fcdb9d2dbc13f
  }

  render() {
=======
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
    const styles = this.getStyles();
    return(
      <div>
        Inside TwitterChart component
       {console.log('IN component: ', this.props.twitterData)}
       <img src={'http://binarycallputoption.com/wp-content/uploads/2016/02/Drawing-1.png'} className="img-responsive"/>
      </div>
            
  }
}

export default TwitterChart;
