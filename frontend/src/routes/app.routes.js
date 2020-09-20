import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Redirect from="*" to="/dashboard" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes
