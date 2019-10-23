import React from 'react'

/*
* A card for each donor in list that shows donor name as "name", date donor was last contacted as "date"
* The values will be passed down as props from donor list
*/
const DonorCard = props => {
    return (
        <div className="donor">
            <h4>{props.name}</h4>
            <p>{props.date}</p>
            <button className="details">Details</button>
        </div>
    )
}

export default DonorCard; 