import React, { Component } from 'react';
import { withRouter } from "react-router";
import { GoogleLogin } from 'react-google-login';

class Login extends Component {
    componentDidMount() {
    }
    success(response) {
        localStorage.setItem('auth', JSON.stringify(response));
        window.location.href = '/';
    }
    failure(response) {
        localStorage.removeItem('auth');
    }
    render() {
        return (
            <div className='login'>
                LOGIN
                <GoogleLogin
                    clientId="227375302353-p5kn9v8s9cr6lhlmpb23nrk1bv44s79v.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.success}
                    onFailure={this.failure}
                />
            </div>            
        );
    }
}

export default withRouter(Login);