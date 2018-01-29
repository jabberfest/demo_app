import { addChannel } from "../actions/channel";

// Reducer
const channels = (state = {
    addChannelVisible: false 
}, action) => {
    switch (action.type) {
        case 'ADD_CHANNEL':
            const nextState = {...state, addChannelVisible:true} 
            return nextState;
        default:
            return state;
    }
}


export default channels;


// Accessor helper function 
export const getAddChannelVisible = (state) =>{
    return state.addChannelVisible;
}