
// Reducers
const modal = (state = {
    visible:false,
    errors: {}
}, action) => {
    switch (action.type) {
        case 'ADD_CHANNEL_SUCCESS':
        case 'CANCEL_ADD_CHANNEL':
        case '@@router/LOCATION_CHANGE':
            return {...state, visible: false, errors: {}};
        case 'ADD_CHANNEL':
            return {...state, visible: true, errors: {}};
        case 'ADD_CHANNEL_ERROR':
            return {...state, errors: action.response};
        default:
            return state;
    }
}

export default modal;

// Accessor helper function 
export const getModalVisible = (state) =>{
    return state.visible;
}

export const getModalErrors = (state) =>{
    return state.errors
}