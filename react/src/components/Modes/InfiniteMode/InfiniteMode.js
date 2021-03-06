import React, { Component } from "react";
import "../modes.css";
import Preloader from "../../Preloader/Preloader";
import axios from "axios";
import Table from "react-bootstrap/lib/Table";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

class ClassicMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top10Players: [],
      isLoading: true
    };
  }

  getData(url, stateName) {
    axios.get(url).then(({ data }) => {
      this.setState({
        [stateName]: data,
        isLoading: false
      });
      // console.log(this.state.top10Players);
    });
  }

  componentDidMount() {
    this.getData("https://jsonplaceholder.typicode.com/users", "top10Players");
  }

  render() {
    const { top10Players, isLoading } = this.state;

    if (isLoading) {
      return <Preloader />;
    }
    return (
      <div>
        <Header logout />
        <div className="mode-wrapper">
          <div className="Table">
            <Table bordered hover condensed className="blackfont">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Username</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {top10Players.map((row, index) => (
                  <tr key={row.username}>
                    <td>{index + 1}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                  </tr>
                ))}
                <tr className="playerRank">
                  <td>asd </td>
                  <td> asddas</td>
                  <td> adsdasds</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="text-center">
            <Link
              to={{
                pathname: "/infinite/game",
                userId: this.props.location.userId,
                token: this.props.location.token
              }}
            >
              <button className="select-button">Start Match</button>
            </Link>
            <Link
              to={{
                pathname: "/gameselect",
                userId: this.props.location.userId,
                token: this.props.location.token
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

export default ClassicMode;
