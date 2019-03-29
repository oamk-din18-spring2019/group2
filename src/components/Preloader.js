import React, { Component } from 'react';
import '../css/preloader.css';

class Preloader extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => { 
            this.setState({ isLoading: false })
        }, 50)
    }

    render() {
        return (
            <div id={this.state.isLoading ? 'loader-wrapper' : 'loader-wrapper-hidden'}>
                <div id="loader">
                </div>
            </div>
        )
    }
}

export default Preloader;