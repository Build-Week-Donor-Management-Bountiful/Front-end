import { axiosWithAuth } from '../utils/axiosWithAuth'
//login
export const LOGIN = 'LOGIN'; 
//signup
export const SIGNUP = 'SIGNUP'; 
//add donor
export const ADD_DONOR = 'ADD_DONOR'; 
//update communication
export const UPDATE_DONOR = 'UPDATE_DONOR'; 

export const UPDATE_USER = 'UPDATE_USER'; 

export const DELETE_USER = 'DELETE_USER'; 
//create campaign
export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN'; 

export const GET_USER = "GET_USER"; 
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL';

 

export const addDonor = donor => {
    return {
        type: ADD_DONOR, 
        payload: donor
    }
}

export const createCampaign = campaign => {
    return {
        type: CREATE_CAMPAIGN, 
        payload: campaign
    }
}

/*******************CRUD********************/
export const login = (values) => (dispatch) => {
    const data = values; 
   
    axiosWithAuth()
    .post('/auth/login/',values)
    .then( r => {
        console.log("Data", r.data)
        localStorage.setItem('token', r.data.token)
        localStorage.setItem('id', r.data.id)
        dispatch({type: LOGIN, payload:{username: values.username, id: r.data.id} })
        
    })
    .catch(error => error)
}
export const signup = values => dispatch => {
    axiosWithAuth()
    .post('auth/register/', values)
    .then(
      r =>{ 
        console.log(r.data)
        localStorage.setItem('token', r.data.token)
        localStorage.setItem('id', r.data.user.id)
        dispatch({type: SIGNUP, payload: r.data.user })
        
      }
    ).catch(
      error => console.log(error.data)
    )
     
}
export const getUser = () => dispatch => {
    axiosWithAuth()
    .get(`users/${id}`)
    .then(r =>{console.log(r.data); dispatch({type: GET_USER, payload: r.data})})
    .catch(error => { console.log(error); dispatch({ type: FETCH_FAIL, payload: error.response})}); 
}

const id = localStorage.getItem('id')

export const updateUser = (values) => dispatch => {
    
    axiosWithAuth()
    .put(`users/${id}`, {username: values.username, password: values.password})
    .then( r => {
        dispatch({type: UPDATE_USER, payload: r.data})
        console.log("updated: ", r.data)
        
        localStorage.setItem('token', r.data.token)
        
    })
    .catch(error => {console.log(error)})
}

export const deleteUser = () => dispatch => {
   
    axiosWithAuth()
    .delete(`users/${id}`)
    .then( r => { 
        console.log(r.data); 
        dispatch({type: DELETE_USER})
        localStorage.clear()
    
    })
    .catch(error => console.log(error))
}