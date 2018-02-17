import { combineReducers } from 'redux';
import { isNil, isUndefined, isArray, values } from 'lodash';

// Reducers
const onlineUsersByChannelById = (state= {}, action) => {
    
     const addOnlineUsers = (state, action) => {
        let newState = {...state};
        const channelId = action.response.channelId;

        const onlineUsers = {
            ...action.response.onlineUsers.entities.onlineUsers
        }

        newState[channelId] = onlineUsers  
 
        return newState;
    }
    
    switch (action.type) {
        case 'UPDATE_CHANNEL_USER_LIST':
            return addOnlineUsers(state, action);
        default:
            return state;
    }
}

const onlineUsersByChannelId = (state= {}, action) => {

    const addOnlineUsers = (state, action) => {
        let newState = {...state};
        const channelId = action.response.channelId;
        const onlineUsersId = action.response.onlineUsers.result

        newState[channelId] = [...onlineUsersId]
 
        return newState;
    }

    switch (action.type) {
        case 'UPDATE_CHANNEL_USER_LIST':
            return addOnlineUsers(state, action);
        default:
            return state;
    }
}

// Combine Reducers
const onlineUsers = combineReducers({
    onlineUsersByChannelById,
    onlineUsersByChannelId
});


export default onlineUsers;


// Accessor helper functions
export const getOnlineUsers = (state, channelId) => {
    const ids = state.onlineUsersByChannelId[channelId]
    return !_.isUndefined(ids) ? ids.map(id => getOnlineUser(state, channelId, id)) : []
}

export const getOnlineUser = (state, channelId, id) => {
    return state.onlineUsersByChannelById[channelId][id]
}