import React, { Component } from 'react';

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
        if (this.handleValidation()) {
            console.log("The form was submitted with the following data:");
            console.log(this.state);
            // ADD the code to submit data into database here //
        }
        else {
            console.log("Form has errors!");
        }
       
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={ this.handleSubmit }>
                    <input
                    type="text"
                    name = "username"
                    placeholder="Username"
                    onChange = {(event) =>
                    this.setState({ username: event.target.value })}
                    />
                    <br/>
                    <input
                    type="password"
                    name = "password"
                    placeholder="Password"
                    onChange = {(event) =>
                    this.setState({ password: event.target.value })}
                    />
                    <br />
                    <input
                    type="password"
                    name = "passwordConfirm"
                    placeholder="Confirm Password"
                    onChange = {(event) =>
                    this.setState({ passwordConfirm: event.target.value })}
                    />
                    <br/>
                    <button onClick={(event) =>this.handleSubmit(event)}>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInPage;