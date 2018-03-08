import { combineReducers } from 'redux';
import { isNil, isUndefined, isArray, values } from 'lodash';

// Reducers
export const channelMessagesByChannelById = (state= {}, action) => {
    
    const addChannels = (state, action, opts={reset:false}) => {
        let newState = {...state};
        const channelId = action.response.channelId;

        const channelMessages = {
            ...action.response.channelMessage.entities.channel_messages
        }

        // If channel not already added, add it
        if (isUndefined(newState[channelId])){  
            newState[channelId] = channelMessages;
        } else{
            if(opts.reset){
                //Dup channel messages by channel id
                newState[channelId] = channelMessages  
            }else{
                //Dup channel messages by channel id
                newState[channelId] = {...newState[channelId], ...channelMessages}  
            }
        }
        return newState;
    }
    
    switch (action.type) {
        case 'FETCH_CHANNEL_MESSAGES_SUCCESS':
            return addChannels(state,action, {reset:true});
        case 'CHANNEL_MESSAGE_RECEIVED':
            return addChannels(state, action);
        default:
            return state;
    }
}

export const channelMessagesByChannelId = (state= {}, action) => {

    const addChannels = (state, action, opts={reset:false}) => {
        let newState = {...state};
        const channelId = action.response.channelId;

        let channelMessageId = action.response.channelMessage.result
        //If normalize returns 1 result or an array of results
        channelMessageId = isArray(channelMessageId) ? channelMessageId : [channelMessageId]

        // If channel not already added, add it
        if (isUndefined(newState[channelId])){  
            newState[channelId] = [...channelMessageId];
        } else{
            if(opts.reset){
                newState[channelId] = [...channelMessageId]   
            }else{
                newState[channelId] = [...newState[channelId], ...channelMessageId]   
            }                 
        }
        return newState;
    }

    switch (action.type) {
        case 'FETCH_CHANNEL_MESSAGES_SUCCESS':
            return addChannels(state, action, {reset:true});
        case 'CHANNEL_MESSAGE_RECEIVED':
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
    return !isUndefined(ids) ? ids.map(id => getChannelMessage(state, channelId, id)) : []
}

export const getChannelMessage = (state, channelId, id) => {
    return state.channelMessagesByChannelById[channelId][id]
}