import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import createStore from "./store/createStore";

import App from './modules/app'
import Login from './modules/Auth/';
import Expenses from './modules/Expenses/';
import Graph from './modules/Graph/';

const Routes = () => {
    const store = createStore();
    return (
        <Provider store={store}>
            <Router>
                <App>
                    <Route exact path="/"  component={Expenses} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/expenses" component={Expenses} />
                    <Route exact path="/graph" component={Graph} />
                </App>
            </Router>
        </Provider>
    );
}
export default Routes;