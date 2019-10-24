import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { login } from '../actions'

//Helper functions that matches what ever value I need from state to props  
const mapStateToProps = state => {
    return {
        campaigns: state.organization.campaigns
    }
}

const CampaignDetails = props => {
    
    const campaign = props.campaigns.find(cpn => cpn.id === Number(props.match.params.id))

    return (

        <div className="campaign-details">
            <h1>Campaign Name: {campaign.name}</h1>
            <p>Mission: {campaign.mission}</p>
            <p>Funding Goal: {campaign.goal}</p>
            <p>Money Raised: {campaign.raised}</p>

            <Link to="/editCampaign"><button >Edit Campaign</button></Link>
        </div>

    );
}

export default connect(mapStateToProps, { login })(CampaignDetails); 




