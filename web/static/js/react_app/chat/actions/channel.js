import * as routes from 'js/phoenix-jsroutes';
import * as schema from './schema';
import { normalize } from 'normalizr';

export const addChannel = () => ({
    type: 'ADD_CHANNEL'
});

export const cancelAddChannel = () => ({
    type: 'CANCEL_ADD_CHANNEL'
});

export const createAddChannel = (text) => (dispatch) => 
    fetch(routes.channelCreate(),{
        method: 'post',
        credentials: 'same-origin',
        headers: new Headers({
            'x-csrf-token': Gon.assets().csrf_token
        })
    }).then(response =>{
        dispatch({
            type: 'ADD_CHANNEL_SUCCESS',
            response: normalize(response, schema.channel)
        });
    }); 