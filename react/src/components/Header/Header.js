// Import all the stuff we need
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.keys = Object.keys(this.props);

    this.navLinks = [];
    this.keys.forEach((key, index) => {
      let redirectRoute = "/" + key;
      if (key === "logout") {
        redirectRoute = "/";
      }
      this.navLinks.push(
        <NavLink to={redirectRoute} className="navbar-link">
          {key}
        </NavLink>
      );
    });

    if (this.c === "logout") {
      console.log(this.c);
      this.redirectRoute = "/";
    } else {
      this.redirectRoute = "/" + this.c;
    }
  }

  handleClick() {
    if (this.c === "logout") {
    }
  }
  render() {
    console.log(this.props);
    if (!this.props.logout) {
      return (
        <header className="header">
          <NavLink to="/">
            <img
              className="header-logo"
              alt="madmind"
              src={require("../../img/madmind.png")}
            />
          </NavLink>
          <nav className="navbar">
            {this.navLinks}
            {/* <NavLink to={this.redirectRoute} className="navbar-link">
            {this.c}
          </NavLink> */}
            {/* <NavLink to="/signup" className="navbar-link">
            SIGN UP
          </NavLink> */}
          </nav>
        </header>
      );
    } else {
      return (
        <header className="header">
          <NavLink to="/gameselect">
            <img
              className="header-logo"
              alt="madmind"
              src={require("../../img/madmind.png")}
            />
          </NavLink>
          <nav className="navbar">
            {this.navLinks}
            {/* <NavLink to={this.redirectRoute} className="navbar-link">
            {this.c}
          </NavLink> */}
            {/* <NavLink to="/signup" className="navbar-link">
            SIGN UP
          </NavLink> */}
          </nav>
        </header>
      );
    }
  }
}

export default Header;
