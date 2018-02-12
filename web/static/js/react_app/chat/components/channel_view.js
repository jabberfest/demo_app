import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as channelActions from '../actions/channel';


class ChatView extends React.Component{
    constructor(){
        super();
    }

    render(){
        //const {} = this.props;

        return (
            <div className="chat-view">
                <div className="header">
                    <div className="col"># demo</div>
                </div>
                
                <div className="chat-area">
                    <div className="chat-window col">
                        text
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
}

ChatView.defaultProps = {

}


const mapStateToProps = (state) => {
    return {
    };
}


ChatView = connect(
    mapStateToProps,
    channelActions
)(ChatView);

export default ChatView
