import React, { Component } from 'react';
import SummaryComponent from './summary.component';

export default class CompanyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <header>
          <NavBar />
        </header>
        <div className="main-content">
          <h1>Company View</h1>
          <SummaryComponent />
        </div>
      </div>
    );
  }
}
