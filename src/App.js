// Import all the stuff we need
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import StartingPage from './components/StartingPage/StartingPage';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Preloader />
                <StartingPage />
            </div>
        )
    }
}

export default App;