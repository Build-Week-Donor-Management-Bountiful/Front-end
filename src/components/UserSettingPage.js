import React from 'react';
import FormikUserSettingForm from './UserSettingForm';
import styled from "styled-components";

const StyledH1 = styled.h1`
  margin-top:50px;
  font-size:30px;
  font-family: 'Muli', sans-serif;
`;



export default function UserSettingPage() {
  return (
    <section className="user-setting-page">
      <StyledH1>This is the User Setting Page</StyledH1>
      <FormikUserSettingForm />
        
    </section>
  );
}