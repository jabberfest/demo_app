import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


import ChannelHeader from './channel_header';
import ChannelItem from './channel_item';

import * as channelActions from '../actions/channel';

import { getChannels, getActiveChannel } from '../reducers/index';


class LeftNav extends React.Component{
    constructor(){
        super();
    }
    
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { fetchChannels } = this.props
        fetchChannels();
    }

    render(){
        const { 
                addChannel, 
                selectChannel, 
                channels,
                activeChannel
              } = this.props

        return (
            <div className="left-container container">
            <div className="current-user-container row">
                <div className="col-4">
                    <img height="50" width="50" />
                </div>

                <div className="col-8 current-user-name">
                    <span>Fernando Arias</span>
                </div>                 
            </div>

            <div className="channel-container">
                <ChannelHeader onAddChannelClick = { addChannel }/>

                <div className="channel-list row">
                    <div className="col-12">
                        <ul>
                            {
                                channels.map((channel)=> 
                                    <ChannelItem 
                                        key={channel.id} 
                                        onClick={selectChannel} 
                                        channel={channel}
                                        activeChannel={activeChannel} 
                                    />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}


LeftNav.propTypes = {
    channels: PropTypes.array.isRequired
}

LeftNav.defaultProps = {
}

const mapStateToProps = (state) => {
    return {
        channels: getChannels(state),
        activeChannel: getActiveChannel(state)
    };
}


LeftNav= connect(
    mapStateToProps,
    channelActions
)(LeftNav);


export default LeftNav