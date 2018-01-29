// Reducer
const current_user = (state = {car: 'foo'}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state;
        default:
            return state;
    }
}


export default current_user


// Accessor helper function 
export const getUser = (state) =>{
    return state
}