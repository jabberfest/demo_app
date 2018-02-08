import * as routes from 'js/phoenix-jsroutes';
import * as schema from './schema';
import { normalize } from 'normalizr';
import * as api from 'js/fetch-api';

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
            response: data
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

export const fetchChannels = () => (dispatch) => {
     /**
     * @todo Refactor into utility method in api
     */
    api.fetch(routes.channelIndex(),{
        method: 'get'
    }).then(api.handleErrors).then(response =>{
        return response.json()
    }).then(data => {
        dispatch({
            type: 'FETCH_CHANNELS_SUCCESS',
            response: data.channels
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