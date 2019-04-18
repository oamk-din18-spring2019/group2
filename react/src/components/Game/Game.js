import React, { Component } from 'react'
import Preloader from '../Preloader/Preloader'
import Question from './Question'
import Button from './Buttons'
import ProgressBar from './ProgressBar'
import './game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            questions: [],
            isLoading: true,
            time: 1600,
            questionIndex: 0,
            percentage: 100,
            id: '',
            correctAnswer: 0
        }

        // Binding functions
        this.fetchQuestions = this.fetchQuestions.bind(this)
        this.countDown = this.countDown.bind(this)
        this.handleClick = this.handleClick.bind(this)
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
        this.timer = setInterval(this.countDown, 10);
    }

    // This is where the actual countdown happens
    countDown() {
        // Declare some variables so we don't have to use a function to set state
        let time = this.state.time - 1
        let questionIndex = this.state.questionIndex + 1
        let percentage = this.state.percentage - (this.state.percentage/this.state.time)

        // Set new state for time and percentage
        this.setState({
            time: time,
            percentage: percentage
        })

        // If time is 0 or less than 0 then clear the interval,
        // set state of time back to 15 seconds
        // and update the question
        if (time <= 0) {
            clearInterval(this.timer);
            this.setState({
                time: 1600,
                percentage: 100,
                questionIndex: questionIndex })
            this.startTimer()
            console.log('Question #' + (questionIndex + 1))
        }
    }

    // This will handle the button clicks
    handleClick(event) {
        let questionIndex = this.state.questionIndex + 1
        let correctAnswer = this.state.correctAnswer + 1

        if (event.target.id === 'correct') {
            this.setState({
                correctAnswer: correctAnswer
            })
        }

        clearInterval(this.timer)
        this.setState({
            time: 1600,
            percentage: 100,
            questionIndex: questionIndex
        })
        this.startTimer()
        console.log('Question #' + (questionIndex + 1))
    }

    // This fetches the questions while the component mounts
    // This also starts the timer
    componentDidMount() {
        this.fetchQuestions()
        this.startTimer()
    }

    // Stop the timer if the user is a monkey
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        // Just shortening state to something prettier
        const {questions, questionIndex, percentage} = this.state

        // Check if the page has finished loading
        if (this.state.isLoading) {
            return <Preloader />
        }
        return (
            <div className="game-wrapper">
                <div className="game-group">
                    <Question question={questions[questionIndex].question} />
                    <div className="answer-buttons">
                        <Button onClick={this.handleClick} id='correct' answer={questions[questionIndex].answers.rightAnswer} />
                        <Button onClick={this.handleClick} id='incorrect' answer={questions[questionIndex].answers.answer1} />
                        <Button onClick={this.handleClick} id='incorrect' answer={questions[questionIndex].answers.answer2} />
                        <Button onClick={this.handleClick} id='incorrect' answer={questions[questionIndex].answers.answer3} />
                    </div>
                    <div className="timer">
                        <ProgressBar percentage={percentage} />
                    </div>
                    <div className="points">
                        {this.state.correctAnswer + '/' + this.state.questions.length}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;