// Import all the stuff we need
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            authenticated: false
        }
    }

    render() {
        return (
            <header className="header">
                <NavLink to="/">
                    <img className="header-logo" alt="madmind" src={require('../../img/madmind.png')} />
                </NavLink>

                <nav className="navbar">
                    <NavLink to="/login" className="navbar-link login">
                        LOGIN
                    </NavLink>
                    <NavLink to="/signup" className="navbar-link login">
                        SIGN UP
                    </NavLink>
                </nav>
            </header>
        )
    }
}

export default Header;