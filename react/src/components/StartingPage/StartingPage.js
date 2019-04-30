import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './startingPage.css'

class StartingPage extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="monkaS">
                        <img className="logo" alt="madmind" src={require('../../img/madmindNoText.png')} />
                        <div className="btn-group">
                            <Link to="/login">
                                <button className="btn log-in">Login</button>
                            </Link>
                            <Link to="/signup">
                                <button className="btn sign-up">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartingPage;