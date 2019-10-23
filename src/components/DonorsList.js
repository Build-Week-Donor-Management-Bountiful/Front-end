import React, {useState} from 'react'; 
import { connect } from 'react-redux'
import DonorCard from './DonorCard'

const mapStateToProps = (state) => {
  
    return {
      
        campaigns: state.organization.campaigns,
    }
}
const DonorsList = props => {
    const donor_array= []

    //iterate through each array
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

    console.log(getAll())
   // const donors_array=[{}];
   // console.log(props.campaigns.map(campaign => campaign.filter(i => i !== null)));
    return(
        <div className="donors, list">
        {donor_array.map(donor => <DonorCard name={donor.name} date={donor.date} id={donor.id}/>)}
    </div>
    )
}



export default connect(mapStateToProps, {})(DonorsList); 