import React, { Component } from 'react';
import Preloader from '../Preloader/Preloader';
import Question from './Question';
import Button from './Buttons';
import './game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            questions: [],
            isLoading: true
        }

        this.fetchQuestions = this.fetchQuestions.bind(this)
    }

    fetchQuestions() {
        fetch('http://localhost:3004/questions')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                questions: data, 
                isLoading: false
            })
        })
    }

    componentDidMount() {
        this.fetchQuestions()
    }

    render() {
        const questionIndex = 0;

        if (this.state.isLoading) {
            return (
                <Preloader />
            )
        }
        return (
            <div className="game-wrapper">
                <div className="game-group">
                    <Question question={this.state.questions[questionIndex].question} />
                    <div className="answer-buttons">
                        <Button answer={this.state.questions[questionIndex].answers.rightAnswer} />
                        <Button answer={this.state.questions[questionIndex].answers.answer1} />
                        <Button answer={this.state.questions[questionIndex].answers.answer2} />
                        <Button answer={this.state.questions[questionIndex].answers.answer3} />
                    </div>
                    <div className="timer">

                    </div>
                </div>
            </div>
        )
    }
}

export default Game;