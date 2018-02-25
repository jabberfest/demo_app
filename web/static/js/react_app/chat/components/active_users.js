import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Views
import CustomScroll from 'react-custom-scroll';

const ActiveUsers = ({users}) => {
    return (        
        <div>
            <div className="active-user-count"><span>{users.length} Active Users</span></div>
            <CustomScroll flex="1">
                <div className="users">
                    {
                        users.map((user)=> 
                            <div key={user.id} className="user">
                                <img height="28" width="28" 
                                src={""+user.avatar}/> 
                                <span>{user.name.split(" ")[0]}</span>
                            </div>
                        )
                    }    
                </div>
            </CustomScroll>
        </div>
    )
}

ActiveUsers.propTypes = {
    users: PropTypes.array.isRequired
};
        
export default ActiveUsers;