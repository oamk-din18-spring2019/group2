import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './startingPage.css'

class StartingPage extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="monkaS">
                        <img className="logo" alt="madmind" src={require('../../img/madmind.png')} />
                        <div className="btn-group">
                            <Link to="/login">
                                <button className="btn log-in">LOGIN</button>
                            </Link>
                            <Link to="/signin">
                                <button className="btn sign-in">SIGN UP</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartingPage;