// Import all the stuff we need
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import the components
import StartingPage from './components/StartingPage/StartingPage';
import SignInPage from './components/SignUpPage/SignUpPage';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import LogInPage from './components/LogInPage/LogInPage';
import GameSelect from './components/GameSelect/GameSelect';
import Error from './components/Error/Error';
import ClassicMode from './components/ClassicMode/ClassicMode';
import './main.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Preloader />
                <Header />
                <Switch>
                    <Route path="/" component={ClassicMode} exact />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/signup" component={SignInPage} />
                    <Route path="/gameselect" component={GameSelect} />
                    <Route path="/classicmode" component={ClassicMode} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;