import React, { Component } from 'react';

class LogInPage extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        console.log("monkas");
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form-group">
                    <form onSubmit={ this.handleSubmit }>
                        <input
                            className="signup-input"
                            type="text"
                            name = "username"
                            placeholder="Username"
                            onChange = {(event) =>
                                this.setState({ username: event.target.value })}
                        />
                        <br/>
                        <input
                            className="signup-input"
                            type="password"
                            name = "password"
                            placeholder="Password"
                            onChange = {(event) =>
                                this.setState({ password: event.target.value })}
                        />
                        <br />
                        <button className="signup-button" onClick={(event) =>this.handleSubmit(event)}>SIGN UP</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LogInPage;