import React from 'react';
import ReactDOM from 'react-dom';

//import Login from './login/components/login';
import ChatLayout from './chat/components/chat_layout';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';


import 'css/react_app/components/modal.scss'

//Reducers
import current_user from './chat/reducers/user';
import channels from './chat/reducers/channel';



// Combine Reducers
const demoApp = combineReducers({
    current_user: current_user,
    channels: channels
});


const store = createStore(demoApp);

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


