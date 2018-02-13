import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const Message = ({}) => {

    return (        
        <div className="message">
            <div className="avatar-img">
                <img height="50" width="50" />
            </div>

            <div className="message-content" >
                <h5>Fernando</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat vel mauris eu volutpat. Cras gravida bibendum tincidunt. Nulla aliquet sapien ut ligula fermentum aliquam. In convallis risus nec maximus pellentesque. Praesent eget lacinia ante, nec interdum felis. Sed erat turpis, tincidunt sit amet purus id, bibendum ultricies lectus. Etiam elementum elementum metus, sit amet finibus mi feugiat ac. Curabitur nibh nunc, aliquam in velit et, consequat iaculis ligula. Nunc volutpat tristique mi, fringilla eleifend ante feugiat nec. Cras congue ipsum in dolor tempor pretium vel nec purus. Nunc euismod porttitor est, id aliquet arcu dignissim vitae. Donec et est ut mauris scelerisque euismod a eu nibh. Quisque at ipsum ut lectus dictum bibendum. Praesent aliquam mi a convallis congue. In mollis enim in congue pellentesque. Pellentesque id nunc elit.</p>
            </div>
        </div>
    )
}

Message.propTypes = {

};
        
export default Message;