// Import all the stuff we need
import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <a href="/"><img className="header-logo" alt="madmind" src={require('../../img/madmind.png')} /></a>

                <nav className="navbar">
                    <a className="navbar-link login" href="/">LOGIN</a>
                    <a className="navbar-link signUp" href="/">SIGN UP</a>
                </nav>
            </header>
        )
    }
}

export default Header;