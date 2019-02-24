import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";
import _ from 'lodash';
import { GoogleLogin } from 'react-google-login';
import * as authActions from './action';
import '../../styles/Auth/index.css';
import icLogo from '../../assets/logo-ic.svg';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: ''
        }
        this.submit = this.submit.bind(this);
    }
    success(response) {
        this.props.successLogin({ data: response, error: 0, message: null });
    }
    failure(response) {
        this.props.failedLogin({ data: null, error: 1, message: response.error });
    }
    componentWillReceiveProps(nextProps) {
        if(!_.isEqual(nextProps.login, this.props.login)) {
            if(nextProps.login.isSuccess) {
                localStorage.setItem('auth', JSON.stringify(nextProps.login.data))
                this.props.history.push('/');
            } else if(nextProps.login.isError) {
                localStorage.removeItem('auth');
            }
        }
    }
    submit(e) {
        e.preventDefault();
        const { user, pass } = this.state;
        this.props.requestLogin({user, pass});
    }
    render() {
        const { user, pass } = this.state;
        return (
            <div className='login'>
                <div className='wrapper-login'>
                    <form onSubmit={e => this.submit}>
                        <input type='text' name='username' onChange={e => this.setState({ user: e.target.value })} value={user} />
                        <input type='password' name='password' onChange={e => this.setState({ pass: e.target.value })} value={pass} />
                        <button onClick={this.submit}>&rarr;</button>
                    </form>
                    <div className='wrapper-logo'>
                        <img src={icLogo} alt='Iclogo' />
                        <GoogleLogin
                            clientId="227375302353-p5kn9v8s9cr6lhlmpb23nrk1bv44s79v.apps.googleusercontent.com"
                            buttonText="Login"
                            className={'google-login'}
                            onSuccess={this.success.bind(this)}
                            onFailure={this.failure.bind(this)}
                        />
                    </div>
                </div>
            </div>            
        );
    }
}
const mapStateToProps = state => ({
    login: state.authReducer.login,
});

const mapDispatchToProps = dispatch => bindActionCreators(authActions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));