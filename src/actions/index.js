

//login
export const LOGIN = 'LOGIN'; 
//signup
export const SIGNUP = 'SIGNUP'; 
//add donor
export const ADD_DONOR = 'ADD_DONOR'; 
//update communication
export const UPDATE_DONOR = 'UPDATE_DONOR'; 
//create campaign
export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN'; 

export const FETCH_FAIL = 'FETCH_FAIL';


export const login = user => {
    console.log('updated state with user info'); 
    return {
        type: LOGIN, 
        payload: user
    }
}