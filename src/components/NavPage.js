import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
  color:blue;
  text-decoration:underline;
  font-size:16px;
  font-family: 'Muli', sans-serif;
  margin:0 10px;
`;




export default function NavBlock() {
  return (
    <>

      <StyledLink to="/">
        Nav Page
      </StyledLink>

      <StyledLink to="/LogIn">
        LogIn Page
      </StyledLink>

      <StyledLink to="/Register">
        Register Page
      </StyledLink>
    
      <StyledLink to="/editDonor">
        Edit Donor Page
      </StyledLink>



      
    
    </>


  );

}