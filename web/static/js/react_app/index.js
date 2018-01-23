import React from 'react';
import ReactDOM from 'react-dom';

import Login from './login/components/login';
import ChatLayout from './chat/components/chat_layout';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ChatLayout} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)


