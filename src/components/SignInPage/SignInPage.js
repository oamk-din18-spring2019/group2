import React, { Component } from 'react';

import './signInPage.css';

class SignInPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            passwordConfirm: ''
        }

        // Bind the function to make `this` work in the callback
        this.handleSubmit = this.handleSubmit.bind(this);
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
        
        let data = this.state;
        data.append("monkas", JSON.stringify(data));

        if (this.handleValidation()) {
            
            fetch('http://localhost:3004/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: data
            })
        }
        else {
            console.log("Form has errors!");
        } 
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

export default SignInPage;