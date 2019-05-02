import React, { Component } from "react";
import "../gamefinished.css";
import Preloader from "../../Preloader/Preloader";
import axios from "axios";
import Table from "react-bootstrap/lib/Table";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

class GameFinished extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
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
