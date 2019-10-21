import React from 'react'; 
import { connect } from 'react-redux'; 

import DonorCard from './DonorCard'

const mapStateToProps = state => {
    return {
        donors: state.donors
    }
}
const Donors = props => {
    return(
        <div className="donors">
            {props.donors.map(donor => <DonorCard name={donor.name} date={donor.date}/>)}
        </div>
    )
}



export default connect(mapStateToProps, {})(Donors)