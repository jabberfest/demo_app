import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const AddChannelForm = ({onCancelClick, onCreateClick}) => {
    let input;
    
    const onCreateClickHandler = (e) => {
        e.preventDefault();
        onCreateClick(input.value)
    }

    return (
        <div>
            <h1>Create a channel</h1>

            <div className="form-group">
                <label htmlFor="channelName">Channel Name</label>
                <input  type="text" 
                        className="form-control" 
                        id="channelName" 
                        aria-describedby="channelHelp" 
                        placeholder="Enter channel name"
                        ref = {(node) => {input = node;}} 
                />
                <small id="channelHelp" className="form-text text-muted">
                    Names must be lowercase, without spaces or periods, and shorter than 22 characters.
                </small>
            </div>

            <div className="text-right">
                <button type="button" className="btn btn-secondary small-right-margin" onClick={onCancelClick}>
                    Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={onCreateClickHandler}>
                    Create
                </button>
            </div>
        </div>
    )
}

AddChannelForm.propTypes = {
    onCancelClick: PropTypes.func.isRequired,
    onCreateClick: PropTypes.func.isRequired
};
        
export default AddChannelForm;