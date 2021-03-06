import React from 'react'; 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'; 
import Header from './Header'

const mapStateToProps = state => {
    return {
        donors: state.donors,
    }
}

const DonorDetails = props => {
    //find donor based on id using history 
    
    


    const donor = props.donors.find(donor => donor.id === Number(props.match.params.id))
    console.log(donor)
    return (
        
            <div className="details">
                <h1>Name: {donor.name}</h1>
                <p>Email: {donor.email}</p>
                <p>Telephone: {donor.phone}</p>
                <p>Last Communication: {donor.date}</p>
                <Link to={`/editDonor/${donor.id}`}><button href="#">Update Donor Details</button></Link>
            </div>
      
    )
}


export default connect(mapStateToProps, {})(DonorDetails)