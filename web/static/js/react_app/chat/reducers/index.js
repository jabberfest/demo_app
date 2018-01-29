import { combineReducers } from 'redux';

//Reducers
import current_user, * as fromUser from '../reducers/user';
import channels, * as fromChannel from '../reducers/channel';



// Combine Reducers
const demoApp = combineReducers({
    current_user: current_user,
    channels: channels
});


export default demoApp;

// Acessor functions to access State tree
export const getCurrentUser = (state) => {
    return fromUser.getUser(state.current_user);
};