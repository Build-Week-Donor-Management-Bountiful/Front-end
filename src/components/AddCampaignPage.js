import React from 'react';
import FormikAddCampaignForm from './AddCampaignForm';
import styled from "styled-components";

const StyledH1 = styled.h1`
  margin-top:50px;
  font-size:30px;
  font-family: 'Muli', sans-serif;
  
`;



export default function AddCampaignPage() {
  return (
    <section className="edit-campaign-page">
      <StyledH1>This is the Add Campaign Form</StyledH1>
      <FormikAddCampaignForm />
        
    </section>
  );
}