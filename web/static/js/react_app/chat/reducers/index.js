import { combineReducers } from 'redux';

//Reducers
import current_user, * as fromUser from '../reducers/user';
import channels, * as fromChannel from '../reducers/channel';
import modal, * as fromModal from '../reducers/modal';



// Combine Reducers
const demoApp = combineReducers({
    current_user: current_user,
    channels: channels,
    modal: modal
});


export default demoApp;

// Selector functions to access State tree
export const getCurrentUser = (state) => {
    return fromUser.getUser(state.current_user);
};

export const getModalVisible = (state) => {
    return fromModal.getModalVisible(state.modal);
}

export const getModalErrors = (state) => {
    return fromModal.getModalErrors(state.modal);
}

export const getChannels = (state) => {
    return fromChannel.getChannels(state.channels);
}

export const getActiveChannelId = (state) => {
    return fromChannel.getActiveChannelId(state.channels);
}

export const getActiveChannel = (state) => {
    return fromChannel.getActiveChannel(state.channels);
}
