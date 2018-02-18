import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const ActiveUsers = ({users}) => {
    return (        
        <div>
            {users.length} Active Users
            {
                users.map((user)=> 
                    <div key={user.id}>
                        <img height="28" width="28" src={""+user.avatar}/> {user.name}
                    </div>
                )
            }        
        </div>
    )
}

ActiveUsers.propTypes = {
    users: PropTypes.array.isRequired
};
        
export default ActiveUsers;