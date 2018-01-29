import React from 'react';
import ReactDOM from 'react-dom';

//import Login from './login/components/login';
import ChatLayout from './chat/components/chat_layout';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import configureStore from './configureStore';

import 'css/react_app/components/modal.scss'


const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ChatLayout} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)


