import React, {useEffect} from 'react'; 

import { Link, withRouter } from 'react-router-dom'
//components
import DonorsList from './DonorsList'


import { getUser } from '../actions'
import { connect } from 'react-redux'; 

//mapping initial state from reducer index to Home props





const mapStateToProps = (state) => { 
    
    return {
        username: state.username,
        campaigns: state.campaigns,
        donors:state.donors
    }

}

const Home = props => {
      
    useEffect(() => {
        props.getUser()
    }, [props.state])
        return (
             <div className="home">
               
                <div className="homeheader">
                    <h1>Welcome, {props.username}</h1>
                   <Link className="add" to='/adddonor'>Add New Donor</Link>
                </div>
                

                <DonorsList/>
            </div>
        ) 
        
   
    
}



export default connect(mapStateToProps,{ getUser })(Home); 