import React from 'react'; 
import { NavLink } from 'react-router-dom'; 


const Nav = () => {
    return (
        <div className="nav">
            <NavLink to="/">Donors</NavLink>
            <NavLink to="/campaigns">Campaigns</NavLink>
            <button className="logout">Logout</button>
        </div>
    )
}


export default Nav; 