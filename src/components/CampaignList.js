import React from 'react'; 
import { connect } from 'react-redux'; 
import { login } from '../actions'
import CampaignCard from './CampaignCard'
import Nav from './Nav'
import {axiosWithAuth }from '../utils/axiosWithAuth'


//a helper functions that matches what ever value I need from state to props for campaignlist 

const mapStateToProps = state => {
    return {
        campaigns: state.campaigns
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

        <div className="campaign-list">
            <Nav/>
            <h2>Your Campaigns</h2>
            <div className="campaigns">
                {props.campaigns.map( campaign => <CampaignCard id={campaign.id} name={campaign.name} mission={campaign.mission} img={campaign.img} donors={campaign.donors} goal={campaign.goal} raised={campaign.raised}/>)}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, { })(CampaignList); 