import React from 'react'
import { Link, Redirect } from 'react-router-dom'; 

/*
* A card for each donor in list that shows donor name as "name", date donor was last contacted as "date"
* The values will be passed down as props from donor list
*/
const DonorCard = props => 
{
    console.log(props)
    return (
        <div className="donor">
            <h4>{props.name}</h4>
            <p>{props.date}</p>
           <Link to={`donor/${props.id}`}><button className="details">Details</button></Link>
        </div>
    )
}

export default DonorCard; 