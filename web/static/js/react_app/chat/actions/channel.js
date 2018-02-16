import * as routes from 'js/phoenix-jsroutes';
import * as schema from './schema';
import { normalize } from 'normalizr';
import * as api from 'js/fetch-api';
import socket from "js/socket";


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

export const subscribeToChannels = () => (dispatch) => {
    debugger;
    dispatch({
        type: "SUBSCRIBE_TO_CHANNELS"
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