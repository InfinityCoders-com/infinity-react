import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import Home from './modules/';
import Login from './modules/Auth/';
import createStore from "./store/createStore";

const Routes = () => {
    const store = createStore();
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        </Provider>
    );
}
export default Routes;