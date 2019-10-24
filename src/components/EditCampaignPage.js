import React from 'react';
import FormikEditCampaignForm from './EditCampaignForm';
import styled from "styled-components";

const StyledH1 = styled.h1`
  margin-top:50px;
  font-size:30px;
  font-family: 'Muli', sans-serif;
  
`;



export default function EditCampaignPage() {
  return (
    <section className="edit-campaign-page">
      <StyledH1>This is the Edit Campaign Form</StyledH1>
      <FormikEditCampaignForm />
        
    </section>
  );
}