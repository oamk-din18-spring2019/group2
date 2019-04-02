import React, { Component } from 'react';
import './startingPage.css'

class StartingPage extends Component {
    render() {
        return (
                <div className="content-wrapper">
                    <div className="monkaS">
                        <img className="logo" alt="madmind" src={require('../../img/madmind.png')} />
                        <div className="btn-group">
                            <button className="btn log-in">LOGIN</button>
                                <button className="btn sign-in">SIGN IN</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default StartingPage;