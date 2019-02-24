import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from "react-redux";
import createStore from "./store/createStore";

import App from './modules/App/'
import Login from './modules/Auth/';
import Expenses from './modules/Expenses/';
import Graph from './modules/Graph/';
import Mail from './modules/Mail/';
import Hosting from './modules/Hosting/'

const Routes = () => {
    const store = createStore();
    return (
        <Provider store={store}>
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Expenses} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/hosting" component={Hosting} />
                        <Route exact path="/expenses" component={Expenses} />
                        <Route exact path="/graph" component={Graph} />
                        <Route exact path="/mail" component={Mail} />
                    </Switch>
                </App>
            </Router>
        </Provider>
    );
}
export default Routes;