import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../Header/Header";
class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      authenticated: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };

    const url = "http://joelmaenpaa.com:8000/api/login";
    // console.log(JSON.stringify(data));
    fetch(url, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        // 'Authorization': 'Bearer '+ apiToken;
      }
    })
      .then(response => response.json())
      .then(myJson => {
        if (myJson.data.api_token) {
          const apiToken = myJson.data.api_token;
          const userId = myJson.data.id;
          this.setState({
            redirect: true,
            apiToken: apiToken,
            authenticated: true,
            userId: userId
          });
          // console.log(this.state.authenticated);
          // console.log(apiToken);
        } else {
          alert("Login failed!");
        }
      })
      .catch(err => {
        alert("Login failed!");
      });
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/gameselect",
            token: this.state.apiToken,
            authenticated: this.state.authenticated,
            userId: this.state.userId
          }}
        />
      );
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Header signup />
          <div className="form-wrapper">
            <div className="form-group">
              <input
                className="signup-input"
                type="text"
                name="username"
                placeholder="Username"
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
              />
              <input
                className="signup-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
              <button className="signup-button" type="submit">
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LogInPage;
