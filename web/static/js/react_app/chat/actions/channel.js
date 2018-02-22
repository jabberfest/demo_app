import * as routes from 'js/phoenix-jsroutes';
import * as schema from './schema';
import { normalize } from 'normalizr';
import * as api from 'js/fetch-api';
import socket from "js/socket";
import {Presence} from "phoenix"


import { push } from 'react-router-redux';

// Selectors
import { 
    getChannelIds, 
    getCurrentUserId,
    getActiveChannelId,
    getChannel
} from '../reducers/index';

//Util
import { isNull } from 'util';


export const addChannel = () => ({
    type: 'ADD_CHANNEL'
});

export const cancelAddChannel = () => ({
    type: 'CANCEL_ADD_CHANNEL'
});

export const createAddChannel = (text) => (dispatch) => {
    const data = {channel: {name: text}};

    /**
     * @todo Refactor into utility method in api
     */
    api.fetch(routes.channelCreate(),{
        method: 'post',
        body: JSON.stringify(data)
    }).then(api.handleErrors).then(response =>{
        return response.json()
    }).then(data => {
        dispatch({
            type: 'ADD_CHANNEL_SUCCESS',
            response: normalize(data, schema.channel)
        });
    }).catch(response => {
        response.json().then(data =>{
            dispatch({
                type: 'ADD_CHANNEL_ERROR',
                response: data.errors
            })
        })
    })
}

export const subscribeToChannelList = () => (dispatch, getState) => {
    const roomListChannel = socket.channel("room-list:lobby",{})

    roomListChannel.join().
        receive("ok", resp =>{
            dispatch({
                type: "SUBSCRIBE_CHANNEL_LIST_SUCCESS"
            })
        })
    
    roomListChannel.on("new_channel", payload =>{
        const channel = normalize(payload, schema.channel)
        
        dispatch({
            type: "CHANNEL_ADDED_RECEIVED",
            response: channel
        })

        subscribeToChannelsHelper(dispatch, getState, channel.result);
    })
}

export const subscribeToChannels = () => (dispatch, getState) => {
    subscribeToChannelsHelper(dispatch, getState);
}

const subscribeToChannelsHelper = (dispatch, getState, id=null) => {
    const state = getState()
    const channelIds = isNull(id) ? getChannelIds(state) : [id]
    const currentUserId = getCurrentUserId(state)

    const dispatchOnlineUsers = (channelId, presences) => {
        const onlineUsers = Presence.list(presences, (id, {metas: [first, ...rest]}) => {
            first.count = rest.length + 1 // count of this user's presences
            first.id = id
            return first
        });

        dispatch({
            type: "UPDATE_CHANNEL_USER_LIST",
            response: {
                channelId: channelId,
                onlineUsers: normalize(onlineUsers, schema.arrayofOnlineUsers)
            }
        })
    }


    const channels = channelIds.map((id)=>{
        const channel = socket.channel(`rooms:${id}`, {})
        let presences = {}

        channel.join().
            receive("ok", resp => {
                dispatch({
                    type: "SUBSCRIBE_CHANNEL_SUCCESS",
                    response: id
                })
            }).receive("error", resp =>{
                dispatch({
                    type: "SUBSCRIBE_CHANNEL_ERROR",
                    response: id
                })
            });
        
        channel.on("new_message", payload =>{
            dispatch({
                type: "CHANNEL_MESSAGE_RECEIVED",
                response: {
                    channelMessage: normalize(payload, schema.channelMessage), 
                    channelId: id,
                    currentUserId: currentUserId,
                    activeChannelId: getActiveChannelId(getState())
                }
            }) 
        });

        channel.on("presence_state", state => {
            presences = Presence.syncState(presences, state)
            dispatchOnlineUsers(id, presences)
        });

        channel.on("presence_diff", diff => {
            presences = Presence.syncDiff(presences, diff)
            dispatchOnlineUsers(id, presences)
        })
        
    })
}

export const fetchChannels = () => (dispatch) => {
     /**
     * @todo Refactor into utility method in api
     */
    return api.fetch(routes.channelIndex(),{
        method: 'get'
    }).then(api.handleErrors).then(response =>{
        return response.json()
    }).then(data => {
        dispatch({
            type: 'FETCH_CHANNELS_SUCCESS',
            response: normalize(data.channels, schema.arrayOfChannels)
        });
    }).catch(response => {
        response.json().then(data =>{
            dispatch({
                type: 'FETCH_CHANNELS_ERROR',
                response: data.errors
            })
        })
    })
}


export const selectChannel= (id, e) => (dispatch) => {
    // Push updated url
    dispatch(push(`/react_app/channel/${id}`));
    
    dispatch({
        type: 'SELECT_CHANNEL',
        response: id
    })
};