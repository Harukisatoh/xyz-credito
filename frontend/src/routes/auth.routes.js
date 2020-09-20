import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login'
import Register from '../pages/Register'

function AuthRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Redirect from="*" to="/login" />
            </Switch>
        </BrowserRouter>
    )
}

export default AuthRoutes
