import React from 'react'; 
import { connect } from 'react-redux'; 


const mapStateToProps = state => {
    return {
        campaigns: state.organization.campaigns,
    }
}

const DonorDetails = props => {
    //find donor based on id using history 
    const donor_array= []; 
    const getAll = () => {
        
        props.campaigns.forEach(
            campaign =>{
                campaign.donors.forEach(
                                donor => donor_array.push(donor)
                )
            }
        )
        console.log(donor_array)
    }
    console.log("params", props)
    getAll()
    const donor = donor_array.find(donor => donor.id === Number(props.match.params.id))
    console.log(donor)
    return (
        <div className="details">
            <h1>Name: {donor.name}</h1>
            <p>Email: {donor.email}</p>
            <p>Telephone: {donor.phone}</p>
            <p>Last Communication: {donor.date}</p>
            <button href="#">Update Donor Details</button>

            


        </div>
    )
}


export default connect(mapStateToProps, {})(DonorDetails)