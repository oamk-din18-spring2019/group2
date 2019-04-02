import React, { Component } from 'react';
import './startingPage.css'

class StartingPage extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="monkaS">
                    <img className="logo" alt="madmind" src={require('../../img/madmind.png')} />
                    <button className="btn log-in">how to color</button>
                    <button className="btn sign-in">Sign in bwoi</button>
                </div>
            </div>
        )
    }
}

export default StartingPage;