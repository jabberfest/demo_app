import * as routes from 'js/phoenix-jsroutes';
import * as schema from './schema';
import { normalize } from 'normalizr';
import * as api from 'js/fetch-api';
import socket from "js/socket";


// Selectors
import { getChannelIds, getCurrentUserId } from '../reducers/index';


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

export const subscribeToChannelList = () => (dispatch) => {
    const roomListChannel = socket.channel("room-list:lobby",{})

    roomListChannel.join().
        receive("ok", resp =>{
            dispatch({
                type: "SUBSCRIBE_CHANNEL_LIST_SUCCESS"
            })
        })
    
    roomListChannel.on("new_channel", payload =>{
        dispatch({
            type: "CHANNEL_ADDED_RECEIVED",
            response: normalize(payload, schema.channel)
        })
    })
}

export const subscribeToChannels = () => (dispatch, getState) => {
    const state = getState()
    const channelIds = getChannelIds(state)
    const currentUserId = getCurrentUserId(state)

    const channels = channelIds.map((id)=>{
        const channel = socket.channel(`rooms:${id}`, {})
        
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
                    currentUserId: currentUserId
                }
            }) 
        });
        
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


export const selectChannel= (id, e) => ({
    type: 'SELECT_CHANNEL',
    response: id
});