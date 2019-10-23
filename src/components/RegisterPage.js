import React from 'react';
import FormikRegisterForm from './RegisterForm';
import styled from "styled-components";

const StyledH1 = styled.h1`
  margin-top:50px;
  font-size:30px;
  font-family: 'Muli', sans-serif;
`;

export default function RegisterPage() {
  return (
    <section className="register-page">
       <StyledH1>This is the Register Page</StyledH1>
      <FormikRegisterForm />
        
    </section>
  );
}