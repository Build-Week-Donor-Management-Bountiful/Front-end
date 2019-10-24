import React from 'react'; 
import { Link } from 'react-router-dom'; 

const CampaignCard = props => {
    return(
        <div className='campaign' key={props.id}>
            <img className="campaign-img" src={props.img} alt={`${props.name}'s campaign`} />
            <h3>{props.name}</h3>
            <p>{props.mission}</p>
            <p>Funding Goal: {props.goal}</p>
            
            <Link to={`/campaign/${props.id}`}><button href="#">More Details</button></Link>
        </div>
    )
}

export default CampaignCard