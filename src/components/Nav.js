import React from 'react'; 
import { NavLink, Link } from 'react-router-dom'; 


const Nav = props => {
    return (
        <div className="nav">
            <h1>Bountiful</h1>
            <NavLink to="/home">Donors</NavLink>
            <NavLink to="/campaigns">Campaigns</NavLink>
            <Link className="logout" to="/" onClick={() => localStorage.clear()}>Logout</Link>
        </div>
    )
}


export default Nav; 