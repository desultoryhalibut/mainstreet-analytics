import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <nav className="navbar navbar-fixed-top navbar-dark red bg-primary">

            <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx2">
                <i className="fa fa-bars"></i>
            </button>

            <div className="container">
                <div className="collapse navbar-toggleable-xs" id="collapseEx2">
                    <a className="navbar-brand" href="#">MAINSTREET ANALYTICS</a>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">My Dashboard <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/company">Company View</a>
                        </li>
                    </ul>

                    <form className="form-inline">
                      <input className="form-control" type="text" placeholder="Search Company" />
                    </form>
                </div>

            </div>

        </nav>
    );
  }
}
