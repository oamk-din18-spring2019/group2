import React, { Component } from "react";
import Preloader from "../../Preloader/Preloader";
import Question from "./Question";
import Button from "./Buttons";
import "../game.css";
import { Redirect } from "react-router-dom";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      isLoading: true,
      questionIndex: 0,
      id: "",
      correctAnswer: 0,
      questionsAnswered: 0,
      points: 0,
      gameRunning: false,
      wrongAnswer: 0
    };

    // Binding functions
    this.fetchQuestions = this.fetchQuestions.bind(this);
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

        console.log(this.state);
      })

      .catch(e => console.log("Failed to fetch questions", e));
  }

  // This will handle the button clicks
  handleClick(event) {
    let questionIndex = this.state.questionIndex;
    let correctAnswer = this.state.correctAnswer + 1;
    let questionsAnswered = this.state.questionsAnswered + 1;
    let points = this.state.points;

    if (event.target.id === "correct") {
      this.setState({
        correctAnswer: correctAnswer,
        points: points + 10
      });
    }
    if (event.target.id === "incorrect") {
      this.setState({
        wrongAnswer: this.state.wrongAnswer + 1
      })
    }
    if (this.state.wrongAnswer === 3) {
      this.setState({
        gameRunning: false
      })
    }
    this.setState({
      questionIndex: questionIndex + 1,
      questionsAnswered: questionsAnswered
    });

    console.log("Question #" + (questionIndex + 1));
    console.log("points: " + this.state.points);
  }

  // This fetches the questions while the component mounts
  // This also starts the timer
  componentDidMount() {
    this.fetchQuestions();
  }

  render() {
    // Just shortening state to something prettier
    const { questions, questionIndex } = this.state;

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
                console.log(answer);
                return (
                  <Button
                    onClick={this.handleClick}
                    id={answer.correct ? "correct" : "incorrect"}
                    answer={answer.text}
                  />
                );
              })}
            </div>
            <div className="wrong-answers">
              {"Wrong Answers: " + this.state.wrongAnswer + "/3"}
            </div>
            <div className="points">
              {this.state.correctAnswer + "/" + this.state.questionsAnswered}
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
