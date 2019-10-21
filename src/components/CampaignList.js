import React from 'react'; 
import { connect } from 'react-redux'; 
import Campaign from './components/Campaign'


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
    * User can click on each campaign to see campaign details
    */

    return (
        <div className="campaigns">
            {props.campaigns.map( campaign => <Campaign id={props.id} name={campaign.name} mission={campaign.mission} img={campaign.img} donors={campaign.donors} goal={campaign.goal} raised={campaign.raised}/>)}
        </div>
    )
}

export default connect(mapStateToProps, {})(CampaignList); 