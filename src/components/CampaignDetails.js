import React from 'react'; 
import DonorsList from './DonorsList'; 
import { connect } from 'react-redux'; 

//Helper functions that matches what ever value I need from state to props  
const mapStateToProps = state => {
    return {
        campaigns: state.campaigns,
        donors: state.donors
    }
}

const CampaignDetails = props => {
    const campaign = props.campaigns.find(campaign => campaign.id === Number(props.match.params.id)); 
    const campaign_donors = props.donors.filter(donor => donor.campaign === campaign.name); 
    const money_raised = campaign_donors.reduce((prev, cur) => {
        return prev + cur.amount;
      }, 0);
    
    return (
        <div className="details">
           <h2>{campaign.name}</h2>
            <img src="" alt={`${campaign.name}'s campaign photo`} />
            <p>Goal: ${campaign.goal}</p>
            <p>Money Raised: ${money_raised}</p>
            <div className="campaign-details">
                {campaign_donors.map( donor => (
                    <div className="donor" key={donor.id}>
                        <h3>{donor.name}</h3>
                        <p>{donor.date}</p>
                        
                    </div>
                ))}
            </div>
        </div>

    );
}

export default connect(mapStateToProps, {})(CampaignDetails)
