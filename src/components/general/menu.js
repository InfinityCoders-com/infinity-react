import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from 'redux';
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
                name: 'HOME',
                image: home,
                link: '/'
            },{
                name: 'LOGIN',
                image: expense,
                link: '/login'
            },{
                name: 'MAILER',
                image: expense,
                link: '/mail'
            },{
                name: 'EXPENSE DEALER',
                image: expense,
                link: '/'
            },{
                name: 'PROJECTS',
                image: expense,
                link: '/'
            },{
                name: 'ACCESS',
                image: expense,
                link: '/'
            }]
        };
        this.navigate = this.navigate.bind(this);
    }
    navigate(val) {
        this.setState({ menu: '' });
        this.props.history.push(val.link);
    }
    renderCards() {
        const headerItemsList = this.state.listItems;
        return _.map(headerItemsList, (val, i) => 
            <div className="column" onTouchStart="this.classList.toggle('hover');">
                <div className="contain">
                    <div className="front">
                        <div className="inner">
                            <p>{val.name}</p>
                            <span>Lorem ipsum</span>
                        </div>
                    </div>
                    <div className="back" style={{'backgroundImage': `url(${val.image})`}}>
                        <div className="inner">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                        </div>
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
                <section className={`cols menu ${menu}`}>
                    {this.renderCards()}
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Menu));