import React, { Component } from 'react';
import '../../styles/general/header.css';
import _ from 'lodash';
import home from '../../assets/img/jpg/home.jpg';
import expense from '../../assets/img/jpg/expense.jpg';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: '',
            listItems: [{
                name: 'Home',
                image: home
            },{
                name: 'Expense Dealer',
                image: expense
            },{
                name: 'Expense Dealer',
                image: expense
            },{
                name: 'Expense Dealer',
                image: expense
            }]
        };
    }
    renderCards() {
        const headerItemsList = this.state.listItems;
        return _.map(headerItemsList, (val, i) => 
            <div className="flip-container" onTouchStart={e => console.log(e.target)} key={i}>
                <div className="flipper">
                    <div className="front">
                        {val.name}
                    </div>
                    <div className="back">
                        <img src={val.image} alt={val.name} />
                    </div>
                </div>
            </div>
        );
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
                <section className={`menu ${menu}`}>
                    {this.renderCards()}
                </section>
            </React.Fragment>
        );
    }
}

export default Menu;