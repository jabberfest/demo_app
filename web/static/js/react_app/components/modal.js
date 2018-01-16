import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import style from 'css/react_app/components/modal.scss'

class Modal extends React.Component{
    constructor(){
        super();
    }
    update(e){
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}


Modal.propTypes = {
}

Modal.defaultProps = {
}


export default Modal