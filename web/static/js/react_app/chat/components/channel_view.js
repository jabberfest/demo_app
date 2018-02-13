import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as channelActions from '../actions/channel';


// Selectors
import { getActiveChannel } from '../reducers/index';

// Views
import Message from './message';
import CustomScroll from 'react-custom-scroll';

class ChatView extends React.Component{
    constructor(){
        super();
    }

    render(){
        const {activeChannel} = this.props;

        return (
            <div className="chat-view">
                <div className="header">
                    <div className="col"># { activeChannel.name }</div>
                </div>
                
                <div className="chat-area">
                    <div className="chat-window col">
                        <div className="messages row">
                            <CustomScroll heightRelativeToParent="calc(100% - 20px)">
                                <div className="col">
                                    <Message />
                                    <Message />
                                    <Message />
                                    <Message />
                                    <Message />
                                    <Message />
                                </div>
                            </CustomScroll>
                        </div>

                        <div className="message-input row">
                            <div className="col">
                            <form autoComplete="off">
                                <div className="form-group">
                                    <input type="text" 
                                    className="form-control" 
                                    id="message" 
                                    placeholder="Message" />
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>

                    <div className="active-users">
                        RightNaV
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
       activeChannel: getActiveChannel(state)
    };
}


ChatView = connect(
    mapStateToProps,
    channelActions
)(ChatView);

export default ChatView
