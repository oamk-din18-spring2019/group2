// Import all the important stuff we need
import React, { Component } from 'react';
import './preloader.css';

// Initialize the preloader component as a class type component
class Preloader extends Component {
    render() {
        return (
            <div id='loader-wrapper'>
                <div id="loader">
                </div>
            </div>
        )
    }
}

export default Preloader;