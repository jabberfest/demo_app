import { createStore } from 'redux';
import demoApp from './chat/reducers/index';

const configureStore = () => {
    return createStore(demoApp);
}

export default configureStore;