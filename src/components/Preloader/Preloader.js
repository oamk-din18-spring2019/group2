// Import all the important stuff we need
import React, { Component } from 'react';
import './preloader.css';

// Initialize the preloader component as a class type component
class Preloader extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    // Cool lifecycle method that allows us to check when the component is done mounting
    componentDidMount() {
        setTimeout(() => { 
            this.setState({ isLoading: false })
        }, 1500) // This timer is not actually mandatory to have but it's nice to have the loader spin around for a while instead of just flashing randomly
    }

    // Class based component; gotta use render() and then return something
    render() {
        return (
            <div id={this.state.isLoading ? 'loader-wrapper' : 'loader-wrapper-hidden'}> {/* Testing if isLoading is true or false with a ternary */}
                <div id="loader">
                </div>
            </div>
        )
    }
}

export default Preloader;