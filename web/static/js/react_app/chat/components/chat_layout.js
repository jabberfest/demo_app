import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Utility
import { isEmpty } from 'lodash';

// Views
import LeftNav from './left_nav';
import Modal from './modal';
import AddChannelForm from './add_channel_form';
import ChannelView from './channel_view';

// Selectors
import { 
    getCurrentUser, 
    getModalVisible, 
    getModalErrors, 
    getActiveChannelId,
    getFetchedChannels,
    getChannels,
    getActiveChannel} from '../reducers/index';

// Actions
import * as channelActions from '../actions/channel';
import * as channelMessageActions from '../actions/channel_message';

//Styles
import 'css/react_app/chat_layout.scss';
import 'css/react_app/components/modal.scss';

//lodash
import {isNil} from 'lodash';


class ChatLayout extends React.Component{
    constructor(){
        super();
    }

    componentDidUpdate(){
        this.fetchInitialChannelMessages();
    }

    fetchInitialChannelMessages(){
        const {
            fetchChannelMessages, 
            modalVisible,
            activeChannelId,
            fetchedChannels
        } = this.props;

        // Fetch channel if modal isn't shown and haven't done initial fetch
        const shouldFetchChannel = !modalVisible && 
            !_.isNil(activeChannelId) && 
            !fetchedChannels.includes(activeChannelId)

        if(shouldFetchChannel){
            fetchChannelMessages(activeChannelId);
        }    
    }

    render(){
        const {
            modalVisible,
            modalErrors,
            cancelAddChannel,
            createAddChannel,
            activeChannelId,
            channels
        } = this.props;


        const emptyContent = isEmpty(channels) ? "Create a channel to join" :
            "Select a channel"

        return (
            <div>
                <div className="chat-layout row">
                    <LeftNav />

                    <div className="right-container col-md">
                        { isNil(activeChannelId) 
                            ? <div className="empty">{emptyContent}</div>
                            : <ChannelView />
                        }
                    </div>
                </div>
                
                { modalVisible &&
                    <Modal>
                        <AddChannelForm 
                            onCancelClick = {cancelAddChannel} 
                            onCreateClick = {createAddChannel}
                            errors = {modalErrors}
                        />
                    </Modal>
                }
           </div>
        )
    }

}


ChatLayout.propTypes = {
    current_user: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    modalErrors: PropTypes.object.isRequired,
    cancelAddChannel: PropTypes.func.isRequired,
    activeChannelId: PropTypes.number,
    activeChannel: PropTypes.object
}

ChatLayout.defaultProps = {

}

const mapStateToProps = (state) => {
    return {
        current_user: getCurrentUser(state),
        modalVisible: getModalVisible(state),
        modalErrors: getModalErrors(state),
        activeChannelId: getActiveChannelId(state),
        activeChannel: getActiveChannel(state),
        fetchedChannels: getFetchedChannels(state),
        channels: getChannels(state)
    };
}

const actions = {...channelActions,...channelMessageActions}

ChatLayout = connect(
    mapStateToProps,
    actions
)(ChatLayout);

export default ChatLayout
