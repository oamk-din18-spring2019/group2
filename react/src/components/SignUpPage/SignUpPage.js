import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './signUpPage.css';

class SignUpPage extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            username: '',
            password: '',
            passwordConfirm: '',
            redirect: false
        }

        // Bind the function to make `this` work in the callback
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This only logs the login.json after stuff has been mounted
    // Gonna get removed later
    componentDidMount() {
        fetch('http://localhost:3004/users')
        .then(response => response.json())
        .then(myJSON => {
            console.log(myJSON)
        })
    }

    handleValidation() {
        let formIsValid = true;

        // Test if the username and password are valid inputs
        if (!/^[a-zA-Z]+$/.test(this.state.username)) {
            formIsValid = false;
            alert('Your username can contain only letters');
        }
        if (this.state.password.length < 5 ) {
            formIsValid = false;
            alert("Your password must be atleast 5 characters long") ;
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
            id: this.state.id,
            username: this.state.username,
            password: this.state.password
        }

        // POST a bunch of mock up data to out fake rest api
        if (this.handleValidation()) {
            fetch('http://localhost:3004/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(myJSON => {
                return console.log(myJSON)
            })

            setTimeout(() => {
                this.setState({ redirect: true })
            }, 1000)
        } else {
            console.log("Form has errors!");
        } 
    }

    render() {
        const redirect = this.state.redirect;
        if (redirect) { 
            return <Redirect to="/" /> 
        }

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
                        <input
                            className="signup-input"
                            type="password"
                            name = "passwordConfirm"
                            placeholder="Confirm Password"
                            onChange = {(event) =>
                                this.setState({ passwordConfirm: event.target.value })}
                        />
                        <br/>
                        <button className="signup-button" onClick={(event) =>this.handleSubmit(event)}>SIGN UP</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUpPage;