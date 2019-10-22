import React from 'react'; 
//components
import DonorsList from './DonorsList'

const Home = props => {
   return ( 
    <div className="home">
        <h1>Welcome, User</h1>

        <div className="donor-filter">
            <p>show only</p>
            {props.campaigns.map(campaign => <button className="filter" onClick={() => console.log(campaign.name)}>{campaign.name}</button>)}
            <button className="filter">All</button>
        </div>

        <DonorsList/>
    </div>)
}

export default Home