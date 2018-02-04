import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import LeftNav from './left_nav';
import Modal from './modal';
import AddChannelForm from './add_channel_form';
import { getCurrentUser, getAddChannelVisible} from '../reducers/index';

import * as channelActions from '../actions/channel';

import 'css/react_app/chat_layout.scss';
import 'css/react_app/components/modal.scss';

import { addChannel } from '../actions/channel';


class ChatLayout extends React.Component{
    constructor(){
        super();
    }

    render(){
        const {
            addChannelVisible,
            cancelAddChannel,
            createAddChannel
        } = this.props;

        return (
            <div>
                { !addChannelVisible &&
                <div className="chat-layout">
                    <LeftNav></LeftNav>

                    <div className="right-container">
                        <div className="">Chat Channel</div>
                    </div>
                </div>
                }

                { addChannelVisible &&
                    <Modal>
                        <AddChannelForm onCancelClick = {cancelAddChannel} onCreateClick = {createAddChannel}/>
                    </Modal>
                }
           </div>
        )
    }

}


ChatLayout.propTypes = {
    current_user: PropTypes.object.isRequired,
    addChannelVisible: PropTypes.bool.isRequired,
    cancelAddChannel: PropTypes.func.isRequired
}

ChatLayout.defaultProps = {

}


const mapStateToProps = (state) => {
    return {
        current_user: getCurrentUser(state),
        addChannelVisible: getAddChannelVisible(state)
    };
}


ChatLayout = connect(
    mapStateToProps,
    channelActions
)(ChatLayout);

export default ChatLayout
