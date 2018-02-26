import React from 'react';
import ReactDOM from 'react-dom';

//import Login from './login/components/login';
import ChatLayout from './chat/components/chat_layout';

import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import { configureStore, history} from './configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router'


const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <ConnectedRouter history={history}>
            <Route path='/' component={ChatLayout} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)


