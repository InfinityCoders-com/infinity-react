import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from 'redux';
import '../../styles/general/header.css';
import _ from 'lodash';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: '',
        };
        this.navigate = this.navigate.bind(this);
    }
    navigate(val) {
        this.setState({ menu: '' });
        this.props.history.push(val.link);
    }
    renderCards() {
        const headerItemsList = this.props.menu.data;
        return _.map(headerItemsList, (val, i) => 
            <div
                className={`column ${Math.ceil(headerItemsList.length / 2) > i ? 'row-one' : '' }`}
                onTouchStart={ e => this.classList.toggle('hover')}
                onClick={e => this.navigate(val)}
                key={i}
            >
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
        console.log(this.props);
        return (
            <React.Fragment>
                <div className='menu-icon' onClick={e => this.setState({ menu: menu === 'open' ? '' : 'open' })}>
                    <div className={`wrapper-menu ${menu}`}>
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

const mapStateToProps = state => ({ menu: state.appData.menu });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Menu));