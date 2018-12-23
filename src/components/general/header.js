import React, { Component } from 'react';
import '../../styles/general/header.css';

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
            <React.Fragment>
                <div className='menu-icon'>
                    <div className={`wrapper-menu ${menu}`} onClick={e => this.setState({ menu: menu === 'open' ? '' : 'open' })}>
                        <div className="line-menu half start"></div>
                        <div className="line-menu"></div>
                        <div className="line-menu half end"></div>
                    </div>
                </div>
                <header className={menu}>
                    <div className="flip-container" onTouchStart={e => console.log(e.target)}>
                        <div className="flipper">
                            <div className="front">
                                Home
                            </div>
                            <div className="back">
                                back
                            </div>
                        </div>
                    </div>
                    <div>Expense Dealer</div>
                    <div>Expense Dealer</div>
                    <div>Expense Dealer</div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;