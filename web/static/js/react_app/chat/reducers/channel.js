import { combineReducers } from 'redux';

// Reducers
const channelList = (state=[], action) => {
    switch (action.type) {
        case 'ADD_CHANNEL_SUCCESS':
            return [...state, action.response];
        case 'FETCH_CHANNELS_SUCCESS':
            return [...action.response];
        default:
            return state;
    }
}

const activeChannel = (state= null, action) =>{
    switch (action.type) {
        case 'SELECT_CHANNEL':
            return action.response;
        default:
            return state;
    }
}


// Combine Reducers
const channels = combineReducers({
    channelList: channelList,
    activeChannel: activeChannel
});

export default channels;


// Accessor helper function 
export const getChannels = (state) => {
    return state.channelList;
}

export const getActiveChannel = (state) => {
    return state.activeChannel;
}