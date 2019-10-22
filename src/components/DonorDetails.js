import React from 'react'; 


const DonorDetails = props => {
    return (
        <div className="details">
            <h1>Name: {props.name}</h1>
            <p>Email: {props.email}</p>
            <p>Telephone: {props.phone}</p>
            <p>Last Communication: {props.date}</p>
            <button href="#">Update Donor Details</button>
        </div>
    )
}


export default DonorDetails