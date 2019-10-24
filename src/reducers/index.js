import { LOGIN, SIGNUP, ADD_DONOR, UPDATE_DONOR, FETCH_FAIL, FETCH_SUCCESS, CREATE_CAMPAIGN, GET_USER, DELETE_USER, UPDATE_USER } from '../actions/index'; 


const mission_dummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
//raised needs to be calculation of all donations

const initial = {
    id: 0, 
    username:"", 
    isFetching: false, 
    error: " ",
    organization:'Wayne Enterprises', 

     donors: [ {
            id: Math.random(), 
            name: 'John Timoth',
            email: 'ysoserious@any.net',
            phone: '555-907-5955',
            campaign: 'Feed The Homeless',
            amount: 50, 
            date: '10/12/19'
        },
        {
            id: Math.random(), 
            name: 'Apple Smith',
            email: 'ApplePie978@anyd.net',
            campaign: 'Feed The Homeless',
            phone: '555-123-4555',
            amount: 34, 
            date: '10/12/19'
        },

        {
            id: Math.random(), 
            name: 'Tommy Bean',
            email: 'ttbeansinc@any.net',
            phone: '976-555-4525',
            campaign: 'Feed The Homeless',
            amount: 45, 
            date: '10/12/19'
        },
    
        {
            id: Math.random(), 
            name: 'Miley Cyrus',
            email: 'hm@disdneyworld.net',
            campaign: 'Feed The Homeless',
            phone: '123-456-7890',
            amount: 0.50, 
            date: '10/12/19'
        },
        {
            id: Math.random(), 
            name: 'Mickey Mouse',
            email: 'MickeyMouseClubHouse@disneyboss.com',
            campaign:  "Repair Bat Signals Throughout Gotham" , 
            phone: '678-453-555',
            amount: 0.50, 
            date: '10/12/19'
        },

        {
            id: Math.random(), 
            name: 'Miley Cyrus',
            email: 'hm@disdneyworld.net',
            campaign: "Help Build More Shelters", 
            phone: '123-456-7890',
            amount: 0.50, 
            date: '10/12/19'
        },
        {
            id: Math.random(), 
            name: 'Mickey Mouse',
            email: 'MickeyMouseClubHouse@disneyboss.com',
            campaign: "Help Build More Shelters", 
            phone:  "Repair Bat Signals Throughout Gotham" ,
            amount: 0.50, 
            date: '10/12/19'
        },

        {
            id: Math.random(), 
            name: 'Selina Kyle',
            email: 'catsoverdogs123@femail.com',
            campaign: "Help Build More Shelters", 
            phone: '555-555-55',
            amount: 20000, 
            date: '1/05/19'
        },

        {
            id: Math.random(), 
            name: 'thomas matt',
            email: 'kajfs@femail.com',
            campaign: "Help Build More Shelters", 
            phone: '555-555-55',
            amount: 20000, 
            date: '1/05/19'
        }

       
    
    //end of donor list
    ],
    campaigns: [
            {
                id: 0, 
                name: "Feed The Homeless" ,
                img: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                mission: mission_dummy, 
                goal: 50000
            },

            {
                id: 1, 
                name: "Repair Bat Signals Throughout Gotham" ,
                img: "https://i.pinimg.com/originals/64/4a/ed/644aed5700ef032be0a4e20ea39f9ef9.jpg",
                mission: mission_dummy, 
                goal: 25000
            },

            {
                id: 2,
                name: "Help Build More Shelters" ,
                img: "https://images.unsplash.com/photo-1543689604-755ae643637b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
                mission: mission_dummy, 
                goal: 75000
            }

            //end of campaign list
        ]

    
}

//reducer

const reducer = (state = initial, action) => {
    switch(action.type){
        case LOGIN: 
        
            return {
                ...state,  
                isFetching: true, 
                error: '...Logging In', 
                username: action.payload.username,
                id: action.payload.id,
                
            }
        case SIGNUP: 
            return {
                ...state, 
                isFetching: true, 
                error: '...Creating Your Account', 
                id: action.payload.id,
                username: action.payload.username, 
                    
                
            }
        case ADD_DONOR: 
            return {
                ...state, 
               donors:[
                  ...state.donors, 
                  action.payload
               ]
                
            }

        case CREATE_CAMPAIGN: 
            return {
                ...state, 
                campaigns: [
                    ...state.campaigns, 
                    action.payload
                ]
            }
            /*

            */
        case UPDATE_DONOR: 
            return {
                ...state, 
                id: Math.floor(Math.random() * Math.floor(100)), 
                name: action.payload.name, 
                email: action.payload.email,
                campaign: action.payload.campaign, 
                phone: action.payload.phone,
                amount: Number(action.payload.amount), 
                date: action.payload.date



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
                username: action.payload.username,
                id: action.payload.id
                
            }
        
        case DELETE_USER: 
            return {
                ...state, 
                isFetching: true, 
                username: '', 
                
            }
        

        case UPDATE_USER: 
            return {
                ...state, 
                username: action.payload.username, 
                password: action.payload.password
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