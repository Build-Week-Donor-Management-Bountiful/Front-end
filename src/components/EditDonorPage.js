import React from 'react';
import FormikEditDonorForm from './EditDonorForm';
import styled from "styled-components";

const StyledH1 = styled.h1`
  margin-top:50px;
  font-size:30px;
  font-family: 'Muli', sans-serif;
`;



export default function EditDonorPage() {
  return (
    <section className="edit-donor-page">
      <StyledH1>This is the Edit Donor Page</StyledH1>
      <FormikEditDonorForm />
        
    </section>
  );
}