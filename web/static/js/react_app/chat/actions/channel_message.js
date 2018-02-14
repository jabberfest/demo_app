import * as routes from 'js/phoenix-jsroutes';
import * as schema from './schema';
import { normalize } from 'normalizr';
import * as api from 'js/fetch-api';

import { getActiveChannelId } from '../reducers/index';


export const createChannelMessage = (text) => (dispatch, getState) => {
    const channel_id = getActiveChannelId(getState())

    const data = { channel_message: {
        message: text,
        channel_id: channel_id 
    }};

    debugger;

    /**
     * @todo Refactor into utility method in api
     */
    api.fetch(routes.channelMessageCreate(),{
        method: 'post',
        body: JSON.stringify(data)
    }).then(api.handleErrors).then(response =>{
        return response.json()
    }).then(data => {
        // dispatch({
        //     type: 'ADD_CHANNEL_SUCCESS',
        //     response: normalize(data, schema.channel)
        // });
    }).catch(response => {
        // response.json().then(data =>{
        //     dispatch({
        //         type: 'ADD_CHANNEL_ERROR',
        //         response: data.errors
        //     })
        // })
    })
}