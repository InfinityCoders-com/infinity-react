import React, { Component } from 'react';
import icLogo from '../../assets/logo-ic.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: ''
        };
    }

    render() {
        const { menu } = this.state;
        return (
            <header className='row'>
                <div className='container-fluid'>
                    <div className='header'>
                        <img src={icLogo} className='logo' />
                        <h2>Expense Manager</h2>
                        <span className='logout'>Logout</span>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;