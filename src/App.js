// Import all the stuff we need
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Import the components
import StartingPage from './components/StartingPage/StartingPage';
import SignInPage from './components/SignUpPage/SignUpPage';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import LogInPage from './components/LogInPage/LogInPage';
import GameSelect from './components/GameSelect/GameSelect';
import Game from './components/Game/Game'
import Error from './components/Error/Error';
import ClassicMode from './components/ClassicMode/ClassicMode';
import './main.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({ isLoading: false })
    }

    render() {
        if (this.state.isLoading) {
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" component={StartingPage} exact />
                    <Route path="/login" component={LogInPage} exact />
                    <Route path="/signup" component={SignInPage} exact />
                    <Route path="/gameselect" component={GameSelect} exact />
                    <Route path="/classicmode" component={ClassicMode} exact />
                    <Route path="/gameselect/game" component={Game} exact />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App