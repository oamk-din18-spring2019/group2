import React, { Component } from 'react';
import Header from './components/Header';
import Preload from './components/Preloader';

class App extends Component {
    render() {
        return (
            <div>
                <Preload />
                <Header />
            </div>
        )
    }
}

export default App;