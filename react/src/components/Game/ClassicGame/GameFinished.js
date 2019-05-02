import React, { Component } from "react";
import "../gamefinished.css";
import Preloader from "../../Preloader/Preloader";
import axios from "axios";
import Table from "react-bootstrap/lib/Table";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

class GameFinished extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };

    this.saveMatch();
  }

  saveMatch() {
    const url = "http://joelmaenpaa.com:8000/api/matches/update";

    const obj = {
      id: this.props.location.matchId,
      isRunning: false,
      numberOfCorrectAnswers: this.props.location.numberOfCorrectAnswers,
      score: this.props.location.points
    };

    console.log("match update obj", obj);
    fetch(url, {
      body: JSON.stringify(obj),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        Authorization: "Bearer " + this.props.location.token
      }
      // mode : 'no-cors'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }
  getData(url, stateName) {
    axios.get(url).then(({ data }) => {
      this.setState({
        [stateName]: data,
        isLoading: false
      });
      console.log(this.state.top10Players);
    });
  }

fetchUserData(){

 const url = "http://joelmaenpaa.com:8000/api/matches/update";

    const obj = {
      id: this.props.location.matchId,
      isRunning: false,
      numberOfCorrectAnswers: this.props.location.numberOfCorrectAnswers,
      score: this.props.location.points
    };

    console.log("match update obj", obj);
    fetch(url, {
      body: JSON.stringify(obj),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        Authorization: "Bearer " + this.props.location.token
      }
      // mode : 'no-cors'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));

  
}
  componentDidMount() {
    this.getData("https://jsonplaceholder.typicode.com/users", "top10Players");
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
                  <th>Rank</th>
                  <th>Username</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>kappa</td>
                  <td>pakka</td>
                  <td>pappa</td>
                </tr>
              </tbody>
            </Table>
            <h1 className="kentteri margini">Your Last Score</h1>
            <Table bordered hover condensed className="blackfont">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Username</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>kappa</td>
                  <td>pakka</td>
                  <td>pappa</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="text-center nappimargin">
            <Link to="/classic/game">
              <button className="select-button">Start Match</button>
            </Link>
            <Link to="/gameselect">
              <button className="select-button">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GameFinished;
