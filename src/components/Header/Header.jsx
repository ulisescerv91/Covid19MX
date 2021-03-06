import React, { Component } from "react";

//CSS
import "./Header.css";


const logo = process.env.PUBLIC_URL + '/assets/images';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
          <nav>
            <div className="nav-wrapper blue-grey darken-4">
              <a href="/" className="left brand-logo">
              <img src={`${logo}/covidgo.png`} alt="CovidGo Logo" className="logo circle"></img>
              CovidGo</a>
              <ul className="right">
                <li><button data-target="right-sidebar-nav" className="pulse btn-floating sidenav-trigger blue-grey darken-3">
                <i className="material-icons">add_alert</i></button></li>
              </ul>
            </div>
          </nav>
      </div>
    );
  }
}
