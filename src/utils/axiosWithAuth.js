import axios from 'axios'; 

export const axiosWithAuth = () => {
    const token = localStorage.get('token'); 
    return axios.create({
        baseURL: 'https://donor-backend-mw.herokuapp.com/api/', 
        headers: {
            Authorization : token
        }
    })
}