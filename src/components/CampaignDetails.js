import React from 'react'; 
import DonorsList from './DonorsList'; 
import { connect } from 'react-redux'; 


const mapStateToProps = state => {
    return {
        campaigns: state.campaigns, 
        donors: state.donors
    }
}
const CampaignDetails = props => {
    const campaign = props.campaigns.find(donor => donor.id === Number(props.match.params.id))
    return (
        <div className="details">
           <h2>{campaign.name}</h2>
            <img src="" alt={`${campaign.name}'s campaign photo`} />
            <p>Goal: {campaign.goal}</p>
            <p>Money Raised: {campaign.raised}</p>
            {props.donors.map( donor => (
                <div className="donor" key={donor.id}>
                    <h4>{donor.name}</h4>
                    <p>{donor.date}</p>
                    <button className="details">Details</button>
                </div>
            ))}
        </div>
    )
}

export default CampaignDetails