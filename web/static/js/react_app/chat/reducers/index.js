import { combineReducers } from 'redux';

//Reducers
import current_user, * as fromUser from '../reducers/user';
import channels, * as fromChannel from '../reducers/channel';
import channelMessages, * as fromChannelMessage from '../reducers/channel_message';
import onlineUsers, * as fromOnlineUser from '../reducers/online_user';
import modal, * as fromModal from '../reducers/modal';


/* 
 * Note: We don't call combine reducers here
 * since we want them combined at the root level
 * with the react-router reducer in configureStore.js
*/
const reducers = {
    current_user,
    channels,
    modal,
    channelMessages,
    onlineUsers
};

export default reducers;

// Selector functions to access State tree
export const getCurrentUser = (state) => {
    return fromUser.getUser(state.current_user);
};

export const getCurrentUserId = (state) => {
    return fromUser.getUserId(state.current_user);
}

export const getModalVisible = (state) => {
    return fromModal.getModalVisible(state.modal);
}

export const getModalErrors = (state) => {
    return fromModal.getModalErrors(state.modal);
}

export const getChannels = (state) => {
    return fromChannel.getChannels(state.channels);
}

export const getChannelIds = (state) => {
    return fromChannel.getChannelIds(state.channels);
}

export const getActiveChannelId = (state) => {
    return fromChannel.getActiveChannelId(state.channels);
}

export const getActiveChannel = (state) => {
    return fromChannel.getActiveChannel(state.channels);
}

export const getChannel = (state, id) => {
    return fromChannel.getChannel(state.channels, id);
}

export const getFetchedChannels = (state) => {
    return fromChannel.getFetchedChannels(state.channels)
}

export const getActiveChannelMessages = (state) => {
    return getChannelMessages(state, getActiveChannelId(state));
}

export const getChannelMessages = (state, channelId) => {
    return fromChannelMessage.getChannelMessages(state.channelMessages, channelId);
}

export const getChannelMessage = (state, channelId, id) => {
    return fromChannelMessage.getChannelMessage(state.channelMessages, channelId, id);
}

export const getActiveChannelOnlineUsers = (state) => {
    return getOnlineUsers(state, getActiveChannelId(state))
}

export const getOnlineUsers = (state, channelId) => {
    return fromOnlineUser.getOnlineUsers(state.onlineUsers, channelId);
}

export const getOnlineUser = (state, channelId, id) => {
    return fromOnlineUser.getOnlineUser(state.onlineUsers, channelId, id);
}