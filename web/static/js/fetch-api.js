const fetchWithDefaults = (input, init) => {
    const initDefaults = {
        ...init,
        credentials: 'same-origin'
    } 

    initDefaults.headers = {
        ...init.headers,  
        'x-csrf-token': Gon.assets().csrf_token,
        'Content-Type': 'application/json'
    }
    
    return fetch(input, initDefaults);
}


export const handleErrors = (response) => {
    if(!response.ok){
        throw response;
    }
    return response;
}

export { fetchWithDefaults as fetch}; 


