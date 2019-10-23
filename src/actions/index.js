import { axiosWithAuth } from '../utils/axiosWithAuth'

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

export const GET_USER = "GET_USER"; 
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL';


export const login = user => {
    console.log('updated state with user info'); 
    return {
        type: LOGIN, 
        payload: user
    }
}

export const getUser = () => dispatch => {
    

    axiosWithAuth()
    .get(`users/user`)
    .then(r =>{console.log(r.data); dispatch({type: GET_USER, payload: r.data})})
    .catch(error => console.log(error)); 
}

/*
dispatch({ type: FETCH_FAIL, payload: error.response})
*/