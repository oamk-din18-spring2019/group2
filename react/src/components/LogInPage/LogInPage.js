import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LogInPage extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false
        }
    }

    handleSubmit = () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        };

        const url = "http://joelmaenpaa.com:8000/api/login";

        console.log(JSON.stringify(data));
        fetch(url, {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ACCEPT: "application/json"
                // 'Authorization': 'Bearer '+ apiToken;
            }
            // mode : 'no-cors'
        })
            .then(response => response.json())
            .then(myJson => {
                // console.log(myJSON);
                const apiToken = myJson.api_token;
                console.log("API TOKEN ", apiToken);
            })
            .catch(err => console.log(err));

        setTimeout(() => {
            this.setState({ redirect: true });
        }, 1000);
    };

<<<<<<< HEAD
    render() {
        if (this.state.redirect) {
            return <Redirect to="/gameselect" />
        }
=======
    console.log(JSON.stringify(data));
    fetch(url, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
        // 'Authorization': 'Bearer '+ apiToken;
      }
      // mode : 'no-cors'
    })
      .then(response => response.json())
      .then(myJson => {
        // console.log(myJSON);
        const apiToken = myJson.data.api_token;
        console.log("API TOKEN ", apiToken);
      })
      .catch(err => console.log(err));
    // console.log("monkaS");
  };
>>>>>>> master

        return (
            <div className="form-wrapper">
                <div className="form-group">
                    <input
                        className="signup-input"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={event => this.setState({ username: event.target.value })}
                    />
                    <input
                        className="signup-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={event => this.setState({ password: event.target.value })}
                    />
                    <button className="signup-button" onClick={this.handleSubmit}>
                        LOGIN
                    </button>
                </div>
            </div>
        );
    }
}

export default LogInPage;
