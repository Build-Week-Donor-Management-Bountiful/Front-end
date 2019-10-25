import React from 'react'; 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'; 
import { login } from '../actions'
import CampaignCard from './CampaignCard'
import Nav from './Nav'
import {axiosWithAuth }from '../utils/axiosWithAuth'


//a helper functions that matches what ever value I need from state to props for campaignlist 

const mapStateToProps = state => {
    return {
        organization:state.organization,
        campaigns: state.campaigns, 
        donors: state.donors
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

            <div className="homeheader">
                <h2>{props.organization}'s Campaigns</h2>
                <Link className="add" to={`/addCampaign`}>Add Campaign</Link>
            </div>
            <div className="campaigns">
                {props.campaigns.map( campaign => 
                    <CampaignCard 
                        id={campaign.id} 
                        key={campaign.id}
                        name={campaign.name} 
                        mission={campaign.mission} 
                        img={campaign.img} 
                        donors={campaign.donors} 
                        goal={campaign.goal} 
                        raised={campaign.raised}
                    />
                )}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, { })(CampaignList); 