import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

const ErrorMessage = ({error}) => {
    return <div className="invalid-feedback">{error}</div>
}


const AddChannelForm = ({onCancelClick, onCreateClick, errors}) => {
    let input;
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onCreateClick(input.value);
    }

    return (        
        <div>
            <h1>Create a channel</h1>

            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="channelName">Channel Name</label>
                    <input  type="text" 
                            className={"form-control " + (isEmpty(errors) ? '': 'is-invalid')}
                            id="channelName" 
                            aria-describedby="channelHelp" 
                            placeholder="Enter channel name"
                            ref = {(node) => {input = node;}} 
                    />

                    <small id="channelHelp" className="form-text text-muted">
                        Names must be lowercase, without spaces or periods, and shorter than 14 characters.
                    </small>

                    
                    { isEmpty(errors)
                        ? null
                        : errors.name.map((error, index) => <ErrorMessage key={index} error={error} />)
                    }

    
                </div>
          
                <div className="text-right">
                    <button type="button" className="btn btn-secondary small-right-margin" onClick={onCancelClick}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary" onClick={onSubmitHandler}>
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

AddChannelForm.propTypes = {
    onCancelClick: PropTypes.func.isRequired,
    onCreateClick: PropTypes.func.isRequired
};
        
export default AddChannelForm;