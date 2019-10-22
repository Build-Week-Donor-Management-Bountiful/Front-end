import React from 'react'; 


const DonorDetails = props => {
    return (
        <div className="details">
            <h1>Name</h1>
            <p>Email</p>
            <p>Telephone</p>
            <p>Last Communication: 12/12/12</p>
            <button href="#">Update Donor Details</button>
        </div>
    )
}


export default DonorDetails