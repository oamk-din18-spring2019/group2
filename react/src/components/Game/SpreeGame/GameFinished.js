import React, { Component } from "react";
import "../gamefinished.css";
import Preloader from "../../Preloader/Preloader";
import Table from "react-bootstrap/lib/Table";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

class GameFinished extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      userId: this.props.location.userId,
      token: this.props.location.token
    };
  }

  saveMatch() {
    const url = "http://joelmaenpaa.com:8000/api/matches/update";

    const obj = {
      id: this.props.location.matchId,
      isRunning: false,
      numberOfCorrectAnswers: this.props.location.numberOfCorrectAnswers,
      score: this.props.location.points
    };

    // console.log("match update obj", obj);
    fetch(url, {
      body: JSON.stringify(obj),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        Authorization: "Bearer " + this.props.location.token
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
      })
      .catch(err => console.log(err));
  }

  fetchUserData() {
    const url =
      "http://joelmaenpaa.com:8000/api/users/" + this.props.location.userId;

    // console.log("user fetching from", url);

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        Authorization: "Bearer " + this.props.location.token
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log("user data be ", data);

        let prevScore = data.highScores[this.props.location.mode];
        this.setState({ username: data.username, isLoading: false });

        if (this.props.location.points > prevScore) {
          const keys = Object.keys(data.highScores);
          const newTotalscore =
            data.totalScore - prevScore + this.props.location.points;

          const newhighScores = {};
          keys.forEach(key => {
            if (key !== this.props.location.mode) {
              newhighScores[key] = data.highScores.key;
            } else {
              newhighScores[key] = this.props.location.points;
            }
          });

          this.updateScore(newhighScores, newTotalscore);
        }
      })
      .catch(err => console.log(err));
  }

  updateScore(updateObj, newTotalScore) {
    const url = "http://joelmaenpaa.com:8000/api/users/scores";

    const data = {
      updateObj,
      newTotalScore,
      userId: this.props.location.userId
    };
    fetch(url, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        Authorization: "Bearer " + this.props.location.token
      }
    })
      .then(response => response.json())
      .then(myJSON => {
        // console.log(myJSON);
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.fetchUserData();
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Preloader />;
    }
    return (
      <div>
        <Header logout />
        <div className="mode-wrapper">
          <div className="Table">
            <h1 className="kentteri margini">Your Highest Score</h1>
            <Table bordered hover condensed className="blackfont">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.username}</td>
                  <td>pappa</td>
                </tr>
              </tbody>
            </Table>
            <h1 className="kentteri margini">Your Last Score</h1>
            <Table bordered hover condensed className="blackfont">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.username}</td>
                  <td>{this.props.location.points}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="text-center nappimargin">
            <Link
              to={{
                pathname: "/spree/game",
                token: this.state.token,
                userId: this.state.userId
              }}
            >
              <button className="select-button">Start Match</button>
            </Link>
            <Link
              to={{
                pathname: "/gameselect",
                token: this.state.token,
                userId: this.state.userId
              }}
            >
              <button className="select-button">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GameFinished;
