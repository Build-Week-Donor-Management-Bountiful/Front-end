import React from 'react'; 
import { NavLink, Link } from 'react-router-dom'; 


const Nav = props => {
    return (
        <div className="nav">
            
            <NavLink to="/home">Donors</NavLink>
            <NavLink to="/campaigns">Campaigns</NavLink>
            <Link className="logout" to="/" onClick={() => localStorage.clear()}>Logout</Link>
        </div>
    )
}


export default Nav; 