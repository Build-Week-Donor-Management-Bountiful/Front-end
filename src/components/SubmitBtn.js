import React from 'react';
import styled from "styled-components";

const boxLength="300px";
const boxHeight="30px;"

const StyledButton = styled.button`
  
  
  border-radius:5px;
  width:${boxLength};
  height:${boxHeight};
  font-size:16px;
  border: 2px solid
  #23293B;
  padding: 1% 2%; 

`;

export default function SubmitBtn({textDisplay}) {
  return (
    <>
      <StyledButton type="submit">{textDisplay}</StyledButton>
    </>
  );
}




