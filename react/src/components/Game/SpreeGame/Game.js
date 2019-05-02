import React, { Component } from "react";
import Preloader from "../../Preloader/Preloader";
import Question from "./Question";
import Button from "./Buttons";
import ProgressBar from "./ProgressBar";
import "../game.css";
import { Redirect } from "react-router-dom";
import Header from "../../Header/Header";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      isLoading: true,
      time: 6000,
      questionIndex: 0,
      percentage: 100,
      id: "",
      correctAnswer: 0,
      questionsAnswered: 0,
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
    let numberOfQuestions = 120000;
    let url =
      "http://joelmaenpaa.com:8000/api/getQuestions/" +
      numberOfQuestions.toString();
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let questions = [];

        data.forEach(questionData => {
          const {
            question,
            option1,
            option2,
            option3,
            correctAnswer
          } = questionData;
          const obj = {};
          obj.question = question;
          obj.answers = [
            { text: option1, correct: false },
            { text: option2, correct: false },
            { text: option3, correct: false },
            { text: correctAnswer, correct: true }
          ];
          obj.correctAnswer = correctAnswer;
          this.shuffle(obj.answers);
          questions.push(obj);
        });

        this.setState({
          questions: questions,
          isLoading: false,
          gameRunning: true
        });
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
    let percentage =
      this.state.percentage - this.state.percentage / this.state.time;

    // Set new state for time and percentage
    this.setState({
      time: time,
      percentage: percentage
    });

    if (time <= 0) {
      this.setState({ gameRunning: false });
    }
  }

  // This will handle the button clicks
  handleClick(ans, correctAnswerStr) {
    let questionIndex = this.state.questionIndex;
    let correctAnswer = this.state.correctAnswer + 1;
    let questionsAnswered = this.state.questionsAnswered + 1;
    let points = this.state.points;

    if (ans === correctAnswerStr) {
      this.setState({
        correctAnswer: correctAnswer,
        points: points + 10
      });
    }
    this.setState({
      questionIndex: questionIndex + 1,
      questionsAnswered: questionsAnswered
    });
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
        <div>
          <Header logout />
          <div className="game-wrapper">
            <div className="game-group">
              <Question question={questions[questionIndex].question} />
              <div className="answer-buttons">
                {questions[questionIndex].answers.map(answer => {
                  return (
                    <Button
                      onClick={() =>
                        this.handleClick(
                          answer.text,
                          questions[questionIndex].correctAnswer
                        )
                      }
                      answer={answer.text}
                    />
                  );
                })}
              </div>
              <div className="timer">
                <ProgressBar percentage={percentage} />
              </div>
              <div className="points">
                {this.state.correctAnswer + "/" + this.state.questionsAnswered}
              </div>
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
