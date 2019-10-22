const mission_dummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
//raised needs to be calculation of all donations

const initial = {
    username: 'Bruce Wayne', 
    password: 'theRe4lD4rkknight', 
    organization: {
        name: 'Wayne Enterprises', 
        campaigns: [
            {
                id: 0, 
                name: "Feed The Homeless of Gotham" ,
                img: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                mission: mission_dummy, 
                donors: [
                    {
                        id: 0, 
                        name: 'The Joker',
                        email: 'ysoserious@any.net',
                        phone: '555-555-555',
                        amount: 0.50, 
                        date: '10/12/19'
                    },
                    {
                        id: 1, 
                        name: 'The Joker',
                        email: 'ysoserious@any.net',
                        phone: '555-555-555',
                        amount: 0.50, 
                        date: '10/12/19'
                    },

                    {
                        id: 2, 
                        name: 'The Joker',
                        email: 'ysoserious@any.net',
                        phone: '555-555-555',
                        amount: 0.50, 
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