import React from 'react'; 
//components
import DonorsList from './DonorsList'

import { connect } from 'react-redux'; 

//mapping initial state from reducer index to Home props





const mapStateToProps = (state) => {
    const donors = []; 
    console.log(state)
    return {
        username: state.credentials.username,
        campaigns: state.organization.campaigns,
        donors:state.organization.campaigns.map(campaign => donors.push(campaign.donors))
    }

}

const Home = props => {
    console.log(props)
    
   

        return (
             <div className="home">
                <h1>Welcome, {props.username}</h1>

                <div className="donor-filter">
            
                    {props.campaigns.map(campaign => <button className="filter" onClick={() => console.log(campaign.name)}>{campaign.name}</button>)}
                    <button className="filter">All</button>
                </div>

                <DonorsList/>
            </div>
        ) 
        
   
    
}

export default connect(mapStateToProps, {})(Home)