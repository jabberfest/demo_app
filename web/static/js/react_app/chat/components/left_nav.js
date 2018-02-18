import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


import ChannelHeader from './channel_header';
import ChannelItem from './channel_item';

import * as channelActions from '../actions/channel';

import { getChannels, getActiveChannelId, getCurrentUser } from '../reducers/index';


class LeftNav extends React.Component{
    constructor(){
        super();
    }
    
    componentDidMount() {
        const {subscribeToChannelList} = this.props
        
        this.fetchData();
        subscribeToChannelList()
    }

    fetchData() {
        const { fetchChannels, subscribeToChannels } = this.props
        fetchChannels().then(()=>subscribeToChannels());
    }

    render(){
        const { 
                addChannel, 
                selectChannel, 
                channels,
                activeChannelId,
                currentUser
              } = this.props


        return (
            <div className="left-container container">
            <div className="current-user-container row">
                <div className="col-4">
                    <img height="50" width="50"  src={""+currentUser.avatar}/>
                </div>

                <div className="col-8 current-user-name">
                    <span>{currentUser.name.split(" ")[0]}</span>
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
                                        activeChannelId={activeChannelId} 
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
    channels: PropTypes.array.isRequired,
    currentUser: PropTypes.object.isRequired
}

LeftNav.defaultProps = {
}

const mapStateToProps = (state) => {
    return {
        channels: getChannels(state),
        activeChannelId: getActiveChannelId(state),
        currentUser: getCurrentUser(state)
    };
}


LeftNav= connect(
    mapStateToProps,
    channelActions
)(LeftNav);


export default LeftNav