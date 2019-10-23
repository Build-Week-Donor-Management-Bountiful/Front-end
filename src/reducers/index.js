import { LOGIN, SIGNUP, ADD_DONOR, UPDATE_DONOR, FETCH_FAIL, FETCH_SUCCESS, CREATE_CAMPAIGN, GET_USER, DELETE_USER, UPDATE_USER } from '../actions/index'; 


const mission_dummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
//raised needs to be calculation of all donations

const initial = {
    id: 0, 
    credentials: {
        username: '', 
        password: ''
    }, 
    isFetching: false, 
    error: " ",
    organization: {
        name: 'Wayne Enterprises', 
        campaigns: [
            {
                id: 0, 
                name: "Feed The Homeless" ,
                img: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                mission: mission_dummy, 
                donors: [
                    {
                        id: 0, 
                        name: 'John Timoth',
                        email: 'ysoserious@any.net',
                        phone: '555-907-5955',
                        amount: 50, 
                        date: '10/12/19'
                    },
                    {
                        id: 1, 
                        name: 'Apple Smith',
                        email: 'ApplePie978@anyd.net',
                        phone: '555-123-4555',
                        amount: 34, 
                        date: '10/12/19'
                    },

                    {
                        id: 2, 
                        name: 'Tommy Bean',
                        email: 'ttbeansinc@any.net',
                        phone: '976-555-4525',
                        amount: 45, 
                        date: '10/12/19'
                    }

                ],
                goal: 50000,
                raised: 1.50
            },

            {
                id: 1, 
                name: "Repair Bat Signals Throughout Gotham" ,
                img: "https://i.pinimg.com/originals/64/4a/ed/644aed5700ef032be0a4e20ea39f9ef9.jpg",
                mission: mission_dummy, 
                donors: [
                    {
                        id: 0, 
                        name: 'Two Faced',
                        email: 'ysoserious@any.net',
                        phone: '555-555-555',
                        amount: 0.50, 
                        date: '10/12/19'
                    },
                    {
                        id: 1, 
                        name: 'Two Faced',
                        email: 'ysoserious@any.net',
                        phone: '555-555-555',
                        amount: 0.50, 
                        date: '10/12/19'
                    }

                   

                ],
                goal: 25000,
                raised: 1
            },

            {
                id: 2,
                name: "Help Build More Shelters" ,
                img: "https://images.unsplash.com/photo-1543689604-755ae643637b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
                mission: mission_dummy, 
                donors: [
                    {
                        id:0, 
                        name: 'Selina Kyle',
                        email: 'catsoverdogs123@femail.com',
                        phone: '555-555-55',
                        amount: 20000, 
                        date: '1/05/19'
                    }
                ],
                goal: 75000,
                raised: 20000 
            }
        ]

    }
}

//reducer

const reducer = (state = initial, action) => {
    switch(action.type){
        case LOGIN: 
        
            return {
                ...state,  
                isFetching: true, 
                error: '...Logging In', 
                credentials:{
                    username: action.payload.username, 
                    password: action.payload.password, 
                },
                
                id: action.payload.id
            }
        case SIGNUP: 
            return {
                ...state, 
                isFetching: true, 
                error: '...Creating Your Account', 
                username: action.payload.username, 
                password: action.payload.password, 
                id: action.payload.id
            }
        case ADD_DONOR: 
            return {
                ...state, 
                error: 'Adding Donor'
            }
        case UPDATE_DONOR: 
            return {
                ...state, 
                error: 'Updating Donor'
            }

        case FETCH_FAIL: 
            return{
                ...state, 
                isFetching: false, 
                error: action.payload
            }
        
        case FETCH_SUCCESS: 
             return {
                 ...state, 
                 isFetching: false
             }
        case GET_USER: 
            return {
                ...state, 
                isFetching: true, 
               credentials: {
                    username: action.payload.username, 
                    password: action.payload.password
                }
            }
        
        case DELETE_USER: 
            return {
                ...state, 
                isFetching: true, 
                credentials: {
                    username: '', 
                    password: ''
                }
            }
        default: 
            return state; 
    }
}

export default reducer



/*
campaigns: 
{
    name: "" ,
    img: "",
    mission: "", 
    donors: [],
    goal: 0,
    raised: 0 
}


donors: 
{
    name: '',
    email: '',
    phone: '',
    amount: 0, 
    date: ''
}
*/