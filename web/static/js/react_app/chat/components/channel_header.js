import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// Styles
import 'css/react_app/components/channel_header.scss';


const ChannelHeader = ({onAddChannelClick}) => (
    <div className="channel-title container">
        <div className="row">
            <div className="col-8">
                <span>Channels</span>
            </div>

            <div 
                className="col-4 add-channel" 
                onClick = {onAddChannelClick}
            >
                <span>+</span>
            </div>
        </div>

    </div>
)

ChannelHeader.propTypes = {
    onAddChannelClick: PropTypes.func.isRequired
};
        

//export default connect()(ChannelHeader)
export default ChannelHeader;