import React from 'react'; 
import { connect } from 'react-redux'; 
import DonorCard from './components/DonorCard'


//a helper functions that matches what ever value I need from state to props for campaignlist 

const mapStateToProps = state => {
    return {
        campaigns: state.organization.campaigns
    }
}


//only have to use props.<value> to access state because of connect from react-redux 
const CampaignList = props => {
    /*
    * Component that displays all the campaigns for user's organization:
    * list of cards for each campaign
    * Each campaign will recieve details from props
    * User can click on donors to see donor details
    */
    return (
        <div className="campaigns">
            {props.campaigns.map( campaign => <DonorCard id={} name={campaign.name} mission={campaign.mission} img={campaign.img} donors={campaign.donors}/>)}
        </div>
    )
}

export default connect(mapStateToProps, {})(CampaignList); 