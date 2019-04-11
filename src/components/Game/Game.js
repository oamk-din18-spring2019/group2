import React, { Component } from 'react';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            question: "",
            rightAnswer: "",
            answer1: "",
            answer2: "",
            answer3: "",
        }
    }

    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

export default Game;