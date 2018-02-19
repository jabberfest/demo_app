import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './chat/reducers/index';

//Browser History
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware} from 'react-router-redux';

const history = createHistory();

const configureStore = () => {
    const historyMiddleware = routerMiddleware(history);

    const middlewares = [historyMiddleware,thunk];

    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(createLogger());
    }

    return createStore(
        combineReducers({
            ...reducers,
            router: routerReducer
        }),
        applyMiddleware(...middlewares)
    );
}

export default configureStore;

export { history, configureStore };