import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import 'css/react_app/chat_layout.scss';


const ChannelItem = ({onClick, channel, activeChannelId}) => {
    const id = channel.id

    const onClickHandler = (e) => {
        onClick(id, e)
    }

    const active = activeChannelId == id;
    const classStr = active ? 'active' : '';
        
    let unreadCount = channel.unreadCount > 0 ? <span className="badge badge-danger">{channel.unreadCount}</span> : null

    return (
        <li className={classStr} onClick={onClickHandler}>
            # {channel.name} {unreadCount}
        </li>
    );
}

ChannelItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    channel: PropTypes.object.isRequired
};
        

export default ChannelItem