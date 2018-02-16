// Reducer
const current_user = (state = Gon.assets().current_user, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default current_user


// Accessor helper function 
export const getUser = (state) =>{
    return state
}

export const getUserId = (state) => {
    return state.id
}