import React, { Component } from 'react';
import { withRouter } from "react-router";
import icLogo from '../../assets/logo-ic.svg';

class Header extends Component {
    componentWillMount() {
        
    }
    render() {
        return (
            <header className='row'>
                <div className='container-fluid'>
                    <div className='header'>
                        <img src={icLogo} className='logo' alt={'logo'} onClick={e => this.props.history.push('/')} />
                        <h2>Expense Manager</h2>
                        <span className='logout'>Logout</span>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);