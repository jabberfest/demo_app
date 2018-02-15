import { combineReducers } from 'redux';
import { isNil, isUndefined, isArray } from 'lodash';

// Reducers
const channelMessagesByChannelById = (state= {}, action) => {
    switch (action.type) {
        case 'FETCH_CHANNEL_MESSAGES_SUCCESS':
        case 'ADD_CHANNEL_MESSAGE_SUCCESS':
            let newState = {...state};
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

    const addChannels = (state, action) => {
        let newState = {...state};
        const channelId = action.response.channelId;

        let channelMessageId = action.response.channelMessage.result
        //If normalize returns 1 result or an array of results
        channelMessageId = _.isArray(channelMessageId) ? channelMessageId : [channelMessageId]


        // If channel not already added, add it
        if (_.isUndefined(newState[channelId])){  
            newState[channelId] = [...channelMessageId];
        } else{
            newState[channelId] = [...newState[channelId], ...channelMessageId]              
        }
        return newState;
    }

    switch (action.type) {
        case 'FETCH_CHANNEL_MESSAGES_SUCCESS':
            return addChannels(state, action);
        case 'ADD_CHANNEL_MESSAGE_SUCCESS':
            return addChannels(state, action);
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