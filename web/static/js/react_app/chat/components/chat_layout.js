import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


import 'css/react_app/chat_layout.scss';



class ChatLayout extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="chat-layout">
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
                        <div className="channel-title row">
                            <div className="col-8">
                                <span>Channels</span>
                            </div>

                            <div className="col-4 add-channel">
                                <span>+</span>
                            </div>

                        </div>

                        <div className="channel-list row">
                            <div className="col-12">
                                <ul>
                                    <li># Demo</li>
                                    <li># Elixir</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="right-container">
                    <div className="">Chat Area</div>
                </div>
            </div>
        )
    }

}


ChatLayout.propTypes = {
    txt: PropTypes.string
}

ChatLayout.defaultProps = {
    txt: "default text"
}





export default ChatLayout