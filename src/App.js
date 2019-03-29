import React, { Component } from 'react';
import Header from './components/Header';
import Preloader from './components/Preloader';

class App extends Component {
    render() {
        return (
            <div>
                <Preloader />
                <Header />
            </div>
        )
    }
}

export default App;