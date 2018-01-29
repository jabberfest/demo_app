import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import LeftNav from './left_nav';
import { getCurrentUser} from '../reducers/index';

import 'css/react_app/chat_layout.scss';


class ChatLayout extends React.Component{
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


ChatLayout.propTypes = {
    current_user: PropTypes.object.isRequired
}

ChatLayout.defaultProps = {

}


const mapStateToProps = (state) => {
    return {
        current_user: getCurrentUser(state)
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


ChatLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatLayout);

export default ChatLayout