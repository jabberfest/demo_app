import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const Modal = (props) => (
    <div className="full-modal">
        <div className="content">
            {props.children}
        </div>
    </div>
)

Modal.propTypes = {
};
        
export default Modal;