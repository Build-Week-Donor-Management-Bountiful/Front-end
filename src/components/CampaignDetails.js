import React from 'react'; 
import DonorsList from './DonorsList'; 
const CampaignDetails = props => {
    return (
        <div className="details">
           <h2>{props.name}</h2>
            <img src="" alt={`${props.name}'s campaign photo`} />
            <p>Goal: {props.goal}</p>
            <p>Money Raised: {props.raised}</p>
            {props.donors.map( donor => (
                <div className="donor" key={donor.id}>
                    <h4>{donor.name}</h4>
                    <p>{donor.date}</p>
                    <button className="details">Details</button>
                </div>
            ))}
        </div>
    )
}

export default CampaignDetails