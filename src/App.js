// Import all the stuff we need
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StartingPage from './components/StartingPage/StartingPage';
import SignInPage from './components/SignInPage/SignInPage';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import LogInPage from './components/LogInPage/LogInPage';
import Error from './components/Error/Error';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Preloader />
                <Header />
                <Switch>
                    <Route path="/" component={StartingPage} exact />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/signin" component={SignInPage} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;