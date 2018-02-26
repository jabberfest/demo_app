import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as channelActions from '../actions/channel_message';

// Selectors
import { 
    getActiveChannel, 
    getActiveChannelMessages,
    getActiveChannelOnlineUsers } from '../reducers/index';

// Views
import Message from './message';
import CustomScroll from 'react-custom-scroll';
import ActiveUsers from './active_users';
import OnlineUsers from '../reducers/online_user';

// Styles
import 'css/react_app/components/channel_view.scss';

class ChatView extends React.Component{
    constructor(){
        super();
    }

    render(){
        const {
            activeChannel, 
            createChannelMessage,
            channelMessages,
            onlineUsers
        } = this.props;
        
        let input;
    
        const onSubmitHandler = (e) => {
            e.preventDefault();
            createChannelMessage(input.value)
            input.value= "";
        }

        return (
            <div className="chat-view">
                <div className="header">
                    <div className="col">#{ activeChannel.name }</div>
                </div>
                
                <div className="chat-area">
                    <div className="chat-window col">
                        <div className="messages row">
                            <CustomScroll flex="1" keepAtBottom={true}>
                                <div className="col">
                                    {
                                        channelMessages.map((message)=> 
                                            <Message 
                                                key={message.id}
                                                avatar={message.avatar}
                                                name={message.name}
                                                message={message.message} 
                                            />)
                                    }
                                </div>
                            </CustomScroll>
                        </div>

                        <div className="message-input row">
                            <div className="col">
                            <form autoComplete="off" onSubmit={onSubmitHandler}>
                                <div className="form-group">
                                    <input type="text" 
                                    className="form-control" 
                                    id="message" 
                                    placeholder="Message"
                                    ref = {(node) => {input = node;}} />
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>

                    <div className="active-users">
                        <ActiveUsers users={onlineUsers} />
                    </div>
                </div>
           </div>
        )
    }

}


ChatView.propTypes = {
    activeChannel: PropTypes.object
}

ChatView.defaultProps = {

}


const mapStateToProps = (state) => {
    return {
       activeChannel: getActiveChannel(state),
       channelMessages: getActiveChannelMessages(state),
       onlineUsers: getActiveChannelOnlineUsers(state)
    };
}


ChatView = connect(
    mapStateToProps,
    channelActions
)(ChatView);

export default ChatView
