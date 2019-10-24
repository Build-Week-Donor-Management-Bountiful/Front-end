import React, {useEffect} from 'react'; 

import { Link, withRouter } from 'react-router-dom'
//components
import DonorsList from './DonorsList'
import Nav from './Nav'; 

import { getUser } from '../actions'
import { connect } from 'react-redux'; 

//mapping initial state from reducer index to Home props





const mapStateToProps = (state) => {
    const donors = []; 
    
    return {
        username: state.username,
        campaigns: state.organization.campaigns,
        donors:state.organization.campaigns.map(campaign => donors.push(campaign.donors))
    }

}

const Home = props => {
    useEffect( () => {
        props.getUser()
    },[props.state]) 
      

        return (
             <div className="home">
                 <Nav/>
                
                <h1>Welcome, {props.username}</h1>

                <div className="donor-filter">
            
                   <Link to='/adddonor'><button>+ new donor</button></Link>
                
                </div>

                <DonorsList/>
            </div>
        ) 
        
   
    
}

export default connect(mapStateToProps,{ getUser })(Home); 