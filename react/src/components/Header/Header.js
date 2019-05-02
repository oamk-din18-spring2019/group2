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
        </nav>
      </header>
    );
  }
}

export default Header;
