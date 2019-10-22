import React from 'react'; 

const CampaignCard = props => {
    return(
        <div className='campaign' key={props.id}>
            <img src={props.img} alt={`${props.name}'s campaign`} />
            <h3>{props.name}</h3>
            <p>{props.mission}</p>
            <p>Funding Goal: {props.goal}</p>
            <p>Money Rasied: {props.raised}</p>
            <button href="#">More Details</button>
        </div>
    )
}

export default CampaignCard