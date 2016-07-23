import React, { Component } from 'react';
import SummaryComponent from './summary.component';
import NavBar from './nav-bar.component';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div className="main-content">
          <img className="header-image" src="http://previews.123rf.com/images/ashdesign/ashdesign1010/ashdesign101000010/8127340-3D-Stock-Market-Data-Blue-Background-Stock-Photo.jpg" alt="Main Street Analytics"/>
          <SummaryComponent />
        </div>
      </div>
    );
  }
}
