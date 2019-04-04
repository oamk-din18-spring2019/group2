import React, { Component } from 'react';

class SignInPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValidation(){
        let formIsValid = true;

        if (!/^[a-zA-Z]+$/.test(this.state.username)){
            formIsValid = false;
            alert('Your username can contain only letters');
        }
        if (this.state.password.length < 5 ) {
            formIsValid = false;
            alert("Your password must be atleast 5 characters long") ;
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
                    <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name = "username"
                    placeholder="Username"
                    onChange = {(event) =>
                    this.setState({username: event.target.value})}
                    />
                    <br/>
                    <input
                    type="password"
                    name = "password"
                    placeholder="Password"
                    onChange = {(event) =>
                    this.setState({password:event.target.value})}
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