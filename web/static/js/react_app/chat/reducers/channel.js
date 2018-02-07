import { addChannel } from "../actions/channel";

// Reducer
const channels = (state = {
    addChannelVisible: false 
}, action) => {

    debugger;
    switch (action.type) {
        case 'ADD_CHANNEL':
            return {...state, addChannelVisible:true} 
        case 'CANCEL_ADD_CHANNEL':
            return {...state, addChannelVisible:false} 
        default:
            return state;
    }
}

export default channels;


// Accessor helper function 
export const getAddChannelVisible = (state) =>{
    return state.addChannelVisible;
}