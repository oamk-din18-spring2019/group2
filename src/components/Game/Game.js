import React, { Component } from 'react';
import './game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            questions: []
        }

        this.fetchQuestions = this.fetchQuestions.bind(this)
    }

    fetchQuestions() {
        fetch('http://localhost:3004/questions')
        .then(response => response.json())
        .then(data => this.setState({ questions: data}))
        .then(() => {
            console.log(this.state.questions)
            return (
                <div className="question">
                    <h1>{this.state.questions[0].question}</h1>
                </div>
            )
        })
    }

    componentDidMount() {
        this.fetchQuestions()
    }

    render() {
        return (
            <div className="game-wrapper">
                <div className="game-group">
                    <div className="question">
                        <h1>monksa</h1>
                    </div>
                    <div className="answer-buttons">
                        <button className="answer-button">Answer 1</button>
                        <button className="answer-button">Answer 2</button>
                        <button className="answer-button">Answer 3</button>
                        <button className="answer-button">Answer 4</button>
                    </div>
                    <div className="timer">

                    </div>
                </div>
            </div>
        )
    }
}

export default Game;