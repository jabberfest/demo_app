import { combineReducers } from 'redux';
import { isNil, isUndefined } from 'lodash';

// Reducers
const channelMessagesByChannelById = (state= {}, action) => {
    switch (action.type) {
        case 'ADD_CHANNEL_MESSAGE_SUCCESS':
            const newState = {...state};
            const channelId = action.response.channelId;

            const channelMessages = {
                ...action.response.channelMessage.entities.channel_messages
            }

            // If channel not already added, add it
            if (_.isUndefined(newState[channelId])){  
                newState[channelId] = channelMessages;
            } else{
                //Dup channel messages by channel id
                newState[channelId] = {...newState[channelId], ...channelMessages}              
            }
            return newState;
        default:
            return state;
    }
}

const channelMessagesByChannelId = (state= {}, action) => {
    switch (action.type) {
        case 'ADD_CHANNEL_MESSAGE_SUCCESS':
            const newState = {...state};
            const channelId = action.response.channelId;

            const channelMessageId = action.response.channelMessage.result

            // If channel not already added, add it
            if (_.isUndefined(newState[channelId])){  
                newState[channelId] = [channelMessageId];
            } else{
                newState[channelId] = [...newState[channelId], channelMessageId]              
            }
            return newState;
        default:
            return state;
    }
}


// Combine Reducers
const channelMessages = combineReducers({
    channelMessagesByChannelById,
    channelMessagesByChannelId
});


export default channelMessages;


// Accessor helper functions
export const getChannelMessages = (state, channelId) => {
    const ids = state.channelMessagesByChannelId[channelId]
    return !_.isUndefined(ids) ? ids.map(id => getChannelMessage(state, channelId, id)) : []
}

export const getChannelMessage = (state, channelId, id) => {
    return state.channelMessagesByChannelById[channelId][id]
}