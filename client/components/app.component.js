import React, { Component } from 'react';
import SummaryComponent from './summary.component';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Main Street Analytics</h1>
        <SummaryComponent />
      </div>
    );
  }
}
