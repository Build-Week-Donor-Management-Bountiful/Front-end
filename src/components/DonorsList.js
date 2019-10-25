import React, {useState} from 'react'; 
import { connect } from 'react-redux'
import DonorCard from './DonorCard'

const mapStateToProps = (state) => {
  
    return {
      
        campaigns: state.campaigns,
        donors: state.donors
    }
}
const DonorsList = props => {
   
   // const donors_array=[{}];
   // console.log(props.campaigns.map(campaign => campaign.filter(i => i !== null)));
    return(
        <div className="donors">
        {props.donors.map(donor => <DonorCard name={donor.name} date={donor.date} id={donor.id}/>)}
    </div>
    )
}



export default connect(mapStateToProps, {})(DonorsList); 