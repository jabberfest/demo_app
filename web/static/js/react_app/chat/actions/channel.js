import * as routes from 'js/phoenix-jsroutes';
import * as schema from './schema';
import { normalize } from 'normalizr';

export const addChannel = () => ({
    type: 'ADD_CHANNEL'
});

export const cancelAddChannel = () => ({
    type: 'CANCEL_ADD_CHANNEL'
});

export const createAddChannel = (text) => (dispatch) => {
    const data = {channel: {name: text}};

    fetch(routes.channelCreate(),{
        method: 'post',
        credentials: 'same-origin',
        body: JSON.stringify(data),
        headers: new Headers({
            'x-csrf-token': Gon.assets().csrf_token,
            'Content-Type': 'application/json'
        })
    }).then(response =>{
        dispatch({
            type: 'ADD_CHANNEL_SUCCESS',
            response: normalize(response, schema.channel)
        });
    }); 
}