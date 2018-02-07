// Reducers
const channels = (state=[], action) => {
    switch (action.type) {
        case 'ADD_CHANNEL_SUCCESS':
            return [...state, action.response];
        default:
            return state;
    }
}


export default channels;


// Accessor helper function 
export const getChannels = (state) =>{
    return state;
}