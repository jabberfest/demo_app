import * as routes from 'js/phoenix-jsroutes';
import * as schema from './schema';
import { normalize } from 'normalizr';
import * as api from 'js/fetch-api';

import { getActiveChannelId } from '../reducers/index';


export const createChannelMessage = (text) => (dispatch, getState) => {
    const channelId = getActiveChannelId(getState())

    const data = { channel_message: {
        message: text,
        channel_id: channelId 
    }};

    /**
     * @todo Refactor into utility method in api
     */
    api.fetch(routes.channelMessageCreate(),{
        method: 'post',
        body: JSON.stringify(data)
    }).then(api.handleErrors).then(response =>{
        return response.json()
    }).then(data => {
        dispatch({
            type: 'ADD_CHANNEL_MESSAGE_SUCCESS',
            response: {
                channelMessage: normalize(data, schema.channelMessage), 
                channelId: channelId
            }
        });
    }).catch(response => {
        response.json().then(data =>{
            dispatch({
                type: 'ADD_CHANNEL_MESSAGE_ERROR',
                response: data.errors
            })
        })
    })
}