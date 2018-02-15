import * as routes from 'js/phoenix-jsroutes';
import * as schema from './schema';
import { normalize } from 'normalizr';
import * as api from 'js/fetch-api';
import { isNil } from 'lodash';

import { getActiveChannelId, getFetchedChannels } from '../reducers/index';


export const createChannelMessage = (text) => (dispatch, getState) => {
    const channelId = getActiveChannelId(getState())

    const data = { channel_message: {
        message: text
    }};

    /**
     * @todo Refactor into utility method in api
     */
    api.fetch(routes.channelChannelMessageCreate(channelId),{
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

export const fetchChannelMessages = (text) => (dispatch, getState) => {
    const state = getState()
    const channelId = getActiveChannelId(state);
    const fetchedChannels = getFetchedChannels(state);

    // If a channel is selected and we haven't fetched it yet
    if (!_.isNil(channelId) && !fetchedChannels.includes(channelId)) {
        /**
         * @todo Refactor into utility method in api
         */
        api.fetch(routes.channelChannelMessageIndex(channelId),{
            method: 'get'
        }).then(api.handleErrors).then(response =>{
            return response.json()
        }).then(data => {
            dispatch({
                type: 'FETCH_CHANNEL_MESSAGES_SUCCESS',
                response: {
                    channelMessage: normalize(data.channel_messages, 
                        schema.arrayofChannelMessages),
                    channelId: channelId
                }
            });
        }).catch(response => {
            response.json().then(data =>{
                dispatch({
                    type: 'FETCH_CHANNELS_MESSAGES_ERROR',
                    response: data.errors
                })
            })
        })   
    }
}