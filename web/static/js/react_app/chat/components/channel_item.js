import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import 'css/react_app/chat_layout.scss';


class ChannelItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <li># Demo</li>
        )
    }

}


ChannelItem.propTypes = {

}

ChannelItem.defaultProps = {

}




export default ChannelItem