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
            <div>
                Foo
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
