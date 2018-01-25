import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

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



class LeftNavInner extends React.Component{
    constructor(){
        super();
    }

    render(){
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
        )
    }

}


LeftNavInner.propTypes = {
}

LeftNavInner.defaultProps = {
}



const LeftNav= connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftNavInner);


export default LeftNav