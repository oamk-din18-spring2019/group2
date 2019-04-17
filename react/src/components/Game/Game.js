import React, { Component } from 'react';
import Preloader from '../Preloader/Preloader';
import Question from './Question';
import Button from './Buttons';
import './game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            questions: [],
            isLoading: true,
            time: 16,
            questionIndex: 0
        }

        this.fetchQuestions = this.fetchQuestions.bind(this)
        this.countDown = this.countDown.bind(this)
    }

    // Fetch the questions from database
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

    // This starts the countdown timer
    startTimer() {
        this.timer = setInterval(this.countDown, 1000);
    }

    // This is where the actual countdown happens
    countDown() {
        let time = this.state.time - 1
        let questionIndex = this.state.questionIndex + 1
        this.setState({ time: time })

        if (time === 0) {
            clearInterval(this.timer);
            this.setState({ time: 15, questionIndex: questionIndex })
            this.startTimer()
            console.log(questionIndex)
        }
    }

    // This will handle the button clicks
    handleClick() {
        let questionIndex = this.state.questionIndex + 1

    }

    // This fetches the questions while the component mounts
    // This also starts the timer
    componentDidMount() {
        this.fetchQuestions()
        this.startTimer()
    }

    render() {
        // Just shortening this.state.whatever to something prettier
        const {questions, questionIndex} = this.state

        // Check if the page has finished loading
        if (this.state.isLoading) {
            return (
                <Preloader />
            )
        }
        return (
            <div className="game-wrapper">
                <div className="game-group">
                    <Question question={questions[questionIndex].question} />
                    <div className="answer-buttons">
                        <Button answer={questions[questionIndex].answers.rightAnswer} />
                        <Button answer={questions[questionIndex].answers.answer1} />
                        <Button answer={questions[questionIndex].answers.answer2} />
                        <Button answer={questions[questionIndex].answers.answer3} />
                    </div>
                    <div className="timer">
                        {this.state.time}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;