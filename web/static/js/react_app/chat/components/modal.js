import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//Styles
import 'css/react_app/components/modal.scss';

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