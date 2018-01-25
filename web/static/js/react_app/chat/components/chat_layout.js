import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import LeftNav from './left_nav';
import { connect } from 'react-redux';

import 'css/react_app/chat_layout.scss';


class ChatLayoutInner extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="chat-layout">
                <LeftNav></LeftNav>

                <div className="right-container">
                    <div className="">Chat Area</div>
                </div>
            </div>
        )
    }

}


ChatLayoutInner.propTypes = {

}

ChatLayoutInner.defaultProps = {

}


const mapStateToProps = (state) => {
    return {
        todos: []
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick:  (id) => {
            dispatch({
                type: 'TOGGLE_TODO'
            })
        }
    };
};


const ChatLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatLayoutInner);

export default ChatLayout