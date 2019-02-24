import { connect } from "react-redux";
import * as actions from './actions';
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import Hosting from './container/';
import '../../styles/hosting.css';

export function mapStateToProps(state) {
    return {
        playerList: state
    };
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Hosting) );