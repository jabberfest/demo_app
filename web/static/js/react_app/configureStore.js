import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import demoApp from './chat/reducers/index';

const configureStore = () => {
    const middlewares = [thunk];

    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(createLogger());
    }

    return createStore(
        demoApp,
        applyMiddleware(...middlewares)
    );
}

export default configureStore;