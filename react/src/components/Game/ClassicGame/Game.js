import React, { Component } from "react";
import Preloader from "../../Preloader/Preloader";
import Question from "./Question";
import Button from "./Buttons";
import ProgressBar from "./ProgressBar";
import "../game.css";
import { Redirect } from "react-router-dom";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      isLoading: true,
      time: 1600,
      questionIndex: 0,
      percentage: 100,
      id: "",
      correctAnswer: 0,
      points: 0,
      gameRunning: false
    };

    // Binding functions
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.countDown = this.countDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Fetch the questions from database
  fetchQuestions() {
    let numberOfQuestions = 15;
    let url =
      "http://joelmaenpaa.com:8000/api/getQuestions/" + numberOfQuestions.toString();
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let questions = [];

        for (let i = 0; i < numberOfQuestions; i++) {
          let arr = [...data];
          arr = arr.splice(i * 13, 13);
          let obj = {};
          obj.question = arr[3];
          obj.answers = [
            { text: arr[4], correct: false },
            { text: arr[5], correct: false },
            { text: arr[6], correct: false },
            { text: arr[7], correct: true }
          ];
          this.shuffle(obj.answers);
          questions.push(obj);
        }
        this.setState({
          questions: questions,
          isLoading: false,
          gameRunning: true
        });

        console.log("[Game.js fetchQuestions]", this.state);
      })

      .catch(e => console.log("Failed to fetch questions", e));
  }

  // This starts the countdown timer
  startTimer() {
    this.timer = setInterval(this.countDown, 10);
  }

  // This is where the actual countdown happens
  countDown() {
    // Declare some variables so we don't have to use a function to set state
    let time = this.state.time - 1;
    let questionIndex = this.state.questionIndex;
    let percentage =
      this.state.percentage - this.state.percentage / this.state.time;

    // Set new state for time and percentage
    this.setState({
      time: time,
      percentage: percentage
    });

    // If time is 0 and user is doesn't answer the last question
    // (time runs out), changes the state of gameRunning to false
    // and redirects the user to the gamefinished page.
    if (questionIndex === 14 && time <= 0) {
      this.setState({ gameRunning: false });
    }

    // If time is 0 or less than 0 then clear the interval,
    // set state of time back to 15 seconds
    // and update the question
    if (time <= 0) {
      clearInterval(this.timer);
      this.setState({
        time: 1600,
        percentage: 100,
        questionIndex: questionIndex + 1
      });
      this.startTimer();
      console.log("Question #" + (questionIndex + 1));
    }
  }

  // This will handle the button clicks
  handleClick(event) {
    let questionIndex = this.state.questionIndex;
    let correctAnswer = this.state.correctAnswer + 1;
    let points = this.state.points;

    if (questionIndex > 13) {
      this.setState({ gameRunning: false });
    }

    if (event.target.id === "correct") {
      this.setState({
        correctAnswer: correctAnswer,
        points: points + 10
      });
    }

    if (this.state.questionIndex === 14) {
      this.setState({ gameRunning: false });
    }

    clearInterval(this.timer);
    this.setState({
      time: 1600,
      percentage: 100,
      questionIndex: questionIndex + 1
    });

    this.startTimer();
    console.log("Question #" + (questionIndex + 1));
    console.log("points: " + this.state.points);
  }

  // This fetches the questions while the component mounts
  // This also starts the timer
  componentDidMount() {
    this.fetchQuestions();
    this.startTimer();
  }

  // Stop the timer if the user is a monkey
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // Just shortening state to something prettier
    const { questions, questionIndex, percentage } = this.state;

    // Check if the page has finished loading
    if (this.state.isLoading) {
      return <Preloader />;
    }
    if (this.state.gameRunning) {
      return (
        <div className="game-wrapper">
          <div className="game-group">
            <Question question={questions[questionIndex].question} />
            <div className="answer-buttons">
              {questions[questionIndex].answers.map(answer => {
                // console.log(answer);
                return (
                  <Button
                    onClick={this.handleClick}
                    id={answer.correct ? "correct" : "incorrect"}
                    answer={answer.text}
                  />
                );
              })}
            </div>
            <div className="timer">
              <ProgressBar percentage={percentage} />
            </div>
            <div className="points">
              {this.state.correctAnswer + "/" + this.state.questions.length}
            </div>
          </div>
        </div>
      );
    }
    if (!this.state.gameRunning) {
      return <Redirect to="/gamefinished" />;
    }
  }
}

export default Game;
