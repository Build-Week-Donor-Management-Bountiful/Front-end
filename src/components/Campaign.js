import React from 'react'; 

const Campaign = props => {
    return(
        <div className='campaign' key={props.id}>
            <img src={props.img} alt={`${props.name}'s campaign`} />
            <h3>{props.name}</h3>
            <p>{props.mission}</p>
            <p>Funding Goal: {props.goal}</p>
            <p>Money Rasied: {props.raised}</p>
        </div>
    )
}

export default Campaign