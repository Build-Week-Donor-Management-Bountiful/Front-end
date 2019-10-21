import React from 'react'

const DonorCard = props => {
    return (
        <div className="donor">
            <h4>{props.name}</h4>
            <p>{props.date}</p>
        </div>
    )
}

export default DonorCard; 