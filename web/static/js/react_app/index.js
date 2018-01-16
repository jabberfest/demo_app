import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login/components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Login} />
            <Route path='/login' component={Login} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)


