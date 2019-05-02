import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./signUpPage.css";

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      username: "",
      password: "",
      passwordConfirm: "",
      redirect: false
    };

    // Bind the function to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidation() {
    let formIsValid = true;

    // Test if the username and password are valid inputs
    if (!/^[a-zA-Z0-9]+$/.test(this.state.username)) {
      formIsValid = false;
      alert("Your username can contain only letters");
    }
    if (this.state.password.length < 5) {
      formIsValid = false;
      alert("Your password must be atleast 5 characters long");
    }
    if (this.state.passwordConfirm !== this.state.password) {
      formIsValid = false;
      alert("Your passwords don't match");
    }
    return formIsValid;
  }

  handleSubmit(event) {
    event.preventDefault();

    // Don't know why the id increments every time it's pushed to the json array help plox!?!?!!11!!1!
    let data = {
      // id: this.state.id,
      username: this.state.username,
      password: this.state.password,
      highScores: JSON.stringify({}),
      counts: JSON.stringify({}),
      lastScores: JSON.stringify({}),
      totalScore: 0
    };

    // POST a bunch of mock up data to out fake rest api
    if (this.handleValidation()) {
      const url = "http://joelmaenpaa.com:8000/api/register";

      console.log(JSON.stringify(data));
      fetch(url, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ACCEPT: "application/json"
        }
        // mode : 'no-cors'
      })
        .then(response => response.json())
        .then(myJSON => {
          console.log(myJSON);
        })
        .catch(err => console.log(err));

      //       var xhr = new XMLHttpRequest();
      //         xhr.open("POST", url, true);

      // //Send the proper header information along with the request
      // xhr.setRequestHeader("Content-Type", "application/json");
      // xhr.setRequestHeader("ACCEPT", "application/json");
      // xhr.onreadystatechange = function() { // Call a function when the state changes.
      //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      //       var response = xhr.responseText;
      //         console.log("HERE NIG", response);
      //     }else{
      //       console.log(this.status);
      //     }
      // }
      // xhr.send(JSON.stringify(data));
      // xhr.send(new Int8Array());
      // xhr.send(document);

      setTimeout(() => {
        this.setState({ redirect: true });
      }, 1000);
    } else {
      console.log("Form has errors!");
    }
  }

  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="form-wrapper">
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <input
              className="signup-input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
            <br />
            <input
              className="signup-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
            <br />
            <input
              className="signup-input"
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              onChange={event =>
                this.setState({ passwordConfirm: event.target.value })
              }
            />
            <br />
            <button
              className="signup-button"
              onClick={event => this.handleSubmit(event)}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
