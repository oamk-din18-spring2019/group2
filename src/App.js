import React, { Component } from 'react';
import Header from './components/Header';
import Preloader from './components/Preloader';

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 1500)
    }

    render() {
        return (
            <div>
               {
                this.state.isLoading ? 
                <Preloader /> :
                <Header />
                } 
            </div>
        )
    }
}

export default App;