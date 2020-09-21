import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard'
import EditDebt from '../pages/EditDebt'
import Search from '../pages/Search'
import Insert from '../pages/Insert'
import Result from '../pages/Result'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/edit" component={EditDebt} />
                <Route path="/search" component={Search} />
                <Route path="/insert" component={Insert} />
                <Route path="/results" component={Result} />
                <Redirect from="*" to="/dashboard" />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes
