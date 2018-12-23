import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../actions';
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import Invoice from '../../components/invoice';
import TransactionForm from '../../components/transactionForm';
import { isAuthenticated } from '../../general/helper';

class Expenses extends Component {
    constructor(props) {
        super(props);
        console.log(this.props, '=-===========================')
        if(!isAuthenticated()) { this.props.history.push('/login') }
        // this.props
    }
    render(){
        return (
            <div className='container-fluid'>
                <div className="row">
                    <TransactionForm />
                    <Invoice />
                </div>
            </div>
        );
    }
}


export function mapStateToProps(state) {
    console.log(state)
    return {
        playerList: state
    };
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Expenses) );