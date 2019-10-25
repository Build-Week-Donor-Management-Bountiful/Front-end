import React from 'react';
import styled from "styled-components";
import Nav from './Nav'

const StyledDivBox = styled.div`
  background-color:#FFE1E1;
  height:99px;
`;



const StyledHdr = styled.header`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width:1000px;
  margin:0 auto;
  padding:25.5px 0;
  height:48px;
  
`;

const StyledH1 = styled.h1`
  font-size:48px;
  font-family: 'Muli', sans-serif;
  color:#23293B;
  margin-left:10px;
`;

const StyledA = styled.a`
  font-size:20px;
  font-family: 'Muli', sans-serif;
  text-decoration:none;
  color:#23293B;
  margin-right:10px;
`;


export default function Header() {
  return (
    <StyledDivBox>
      <StyledHdr >
        <StyledH1>Bountiful</StyledH1>
        <Nav/>     
      </StyledHdr>
    </StyledDivBox>

    




  );





} 