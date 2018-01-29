import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import LeftNav from './left_nav';
import { getCurrentUser, getAddChannelVisible} from '../reducers/index';

import 'css/react_app/chat_layout.scss';
import 'css/react_app/components/modal.scss';

import { addChannel } from '../actions/channel';


class ChatLayout extends React.Component{
    constructor(){
        super();
    }

    render(){
        const { addChannelVisible } = this.props;

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
                   <div className="full-modal">
                    <div className="content">
                        asdasd
                    </div>
                   </div>
                }
           </div>
        )
    }

}


ChatLayout.propTypes = {
    current_user: PropTypes.object.isRequired,
    addChannelVisible: PropTypes.bool.isRequired
}

ChatLayout.defaultProps = {

}


const mapStateToProps = (state) => {
    return {
        current_user: getCurrentUser(state),
        addChannelVisible: getAddChannelVisible(state)
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
