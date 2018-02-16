import { combineReducers } from 'redux';
import { isNil } from 'lodash';

// Reducers
const channelList = (state= {}, action) => {
    switch (action.type) {
        case 'ADD_CHANNEL_SUCCESS':
            return {...state, ...action.response.entities.channels}
        case 'FETCH_CHANNELS_SUCCESS':
            return {...action.response.entities.channels};
        default:
            return state;
    }
}

const channelIds = (state= [], action) => {
    switch (action.type) {
        case 'ADD_CHANNEL_SUCCESS':
            return [...state, action.response.result];
        case 'FETCH_CHANNELS_SUCCESS':
            return [...action.response.result];
        default:
            return state;
    }
}

const activeChannel = (state= null, action) => {
    switch (action.type) {
        case 'SELECT_CHANNEL':
            return action.response;
        default:
            return state;
    }
}

const fetchedChannels = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_CHANNEL_MESSAGES_SUCCESS':
            return [...state, action.response.channelId];
        default:
            return state;
    }
}


// Combine Reducers
const channels = combineReducers({
    channelList,
    channelIds,
    activeChannel,
    fetchedChannels
});

export default channels;


// Accessor helper function 
export const getChannels = (state) => {
    const ids = state.channelIds;
    return ids.map(id => getChannel(state, id));
}

export const getChannelIds = (state) => {
    return state.channelIds;
}

export const getActiveChannelId = (state) => {
    return state.activeChannel;
}

export const getActiveChannel = (state) => {
    return isNil(state.activeChannel) ? state.activeChannel : state.channelList[state.activeChannel];
}

export const getChannel = (state, id) => {
    return state.channelList[id];
}

export const getFetchedChannels = (state) => {
    return state.fetchedChannels;
}