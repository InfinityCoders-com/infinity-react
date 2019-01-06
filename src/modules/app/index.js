import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";
import { isAuthenticated } from '../../general/helper';
import Header from '../../components/general/header';
import Menu from '../../components/general/menu';
import appActions from './action';

class App extends Component {
    constructor(props) {
        super(props);
        if(!isAuthenticated()) {
            this.props.history.push('/login');
        }
    }
    componentWillMount(){
        console.log(localStorage.getItem('auth'),'ppppppppppppppppp')
    }
    render(){
        // console.log(this.props, '0000000000000')
        const { location } = this.props;
        return (
            <React.Fragment>
                {location.pathname !== '/login' ? <Header /> : null}
                <Menu />
                <div className="row">
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => ({
    login: state.authReducer.login,
});

const mapDispatchToProps = dispatch => bindActionCreators(appActions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));