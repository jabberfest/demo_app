import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import 'css/react_app/chat_layout.scss';


const ChannelItem = ({onClick, channel, activeChannel}) => {
    const id = channel.id

    const onClickHandler = (e) => {
        onClick(id, e)
    }

    const active = activeChannel == id;
    const classStr = active ? 'active' : '';
        
    return (<li className={classStr} onClick={onClickHandler}># {channel.name}</li>);
}

ChannelItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    channel: PropTypes.object.isRequired
};
        

export default ChannelItem