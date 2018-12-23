import React, { Component } from 'react';
import { withRouter } from "react-router";
import { isAuthenticated } from '../general/helper';
import Header from '../components/general/header';

class App extends Component {
    constructor(props) {
        super(props);
        if(!isAuthenticated()) { this.props.history.push('/login') }
    }
    render(){
        return (
            <div className='container-fluid'>
                <Header />
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(App);