import React, { Component } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import '../css/preloader.css';

class Preload extends Component {
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div id="loader-wrapper">
                        <div id="logo">
                            <img alt="madmind" id="img" src={require('../img/madmind.png')} />
                        </div>

                        <div id="loader">
                        </div>
                    </div>
                </Placeholder>
            </Preloader>
        )
    }
}

export default Preload;