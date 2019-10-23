import React from 'react'; 
import { connect } from 'react-redux'; 


const mapStateToProps = state => {
    return {
        credentials: state.credentials, 
        organization: state.organization, 
        campaigns: state.organization.campaigns
    }
}


//only have to use props.<value> to access state because of connect from react-redux 
const Testing = props => {
    
    return (

        <div className="campaign-list">
        
            <h2>Your Campaigns</h2>
            <p>username: {props.credentials.username}</p>
            <p>password: {props.organization}</p>
       
        </div>
    )
}

export default connect(mapStateToProps, {})(Testing); 