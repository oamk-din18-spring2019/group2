import React, { Component } from 'react';

class LogInPage extends Component {
    // constructor() {
    //     // super();
    //     // this.state = {
    //     //     username: "",
    //     //     password: ""
    //     // }

    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    handleSubmit = () => {


        const data = {
            username: this.state.username,
            password: this.state.password,
        }

        const url =
            "http://127.0.0.1:8000/api/login";


        console.log(JSON.stringify(data));
        fetch(url, {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ACCEPT': 'application/json',
                // 'Authorization': 'Bearer '+ apiToken;
            }
            ,
            // mode : 'no-cors'
        })
            .then(response => response.json())
            .then(myJson => {
                // console.log(myJSON);
                const apiToken = myJson.api_token;
                console.log("API TOKEN ", apiToken);
            })
            .catch(err => console.log(err));
        // console.log("monkaS");
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form-group">
                    {/* <form> */}
                    <input
                        className="signup-input"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={(event) =>
                            this.setState({ username: event.target.value })}
                    />
                    <br />
                    <input
                        className="signup-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(event) =>
                            this.setState({ password: event.target.value })}
                    />
                    <br />
                    <button className="signup-button" onClick={this.handleSubmit}>LOGIN</button>
                    {/* </form> */}
                </div>
            </div>
        )
    }
}

export default LogInPage;