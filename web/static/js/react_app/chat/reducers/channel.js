import { combineReducers } from 'redux';
import { isNil } from 'lodash';

// Reducers
const channelList = (state= {}, action) => {
    switch (action.type) {
        case 'CHANNEL_ADDED_RECEIVED':
            return {...state, ...action.response.entities.channels}
        case 'FETCH_CHANNELS_SUCCESS':
            return {...action.response.entities.channels};
        case 'CHANNEL_MESSAGE_RECEIVED':
            const {channelId, activeChannelId} = action.response

            //If message is for current channel don't increment unread count
            if(activeChannelId == channelId){
                return state;
            }else{
                const newState = {...state}

                // Dup channel
                newState[channelId] = {...newState[channelId]}

                // If initial count not set, set it, otherwise increment by 1
                if(isNil(newState[channelId].unreadCount)){
                    newState[channelId].unreadCount = 1
                }
                else{
                    newState[channelId].unreadCount++
                }
                return newState
            }
        case 'SELECT_CHANNEL':
            const id = action.response
            const newState = {...state}

            // Dup channel and reset count for current channel
            newState[id] = {...newState[id]}
            newState[id].unreadCount = 0
            
            return newState;
        default:
            return state;
    }
}

const channelIds = (state= [], action) => {
    switch (action.type) {
        case 'CHANNEL_ADDED_RECEIVED':
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
        case '@@router/LOCATION_CHANGE':
            const splitPath = action.payload.pathname.split('channel/')
            return isNil(splitPath[1]) ? null : parseInt(splitPath[1])
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
    const channel = state.channelList[state.activeChannel];
    return isNil(channel) ? {} : channel;
}

export const getChannel = (state, id) => {
    return state.channelList[id];
}

export const getFetchedChannels = (state) => {
    return state.fetchedChannels;
}