import React from 'react';
import FormikLogInForm from './LogInForm';
import styled from "styled-components";

const StyledH1 = styled.h1`
  margin-top:50px;
  font-size:30px;
  font-family: 'Muli', sans-serif;
`;


export default function LoginPage() {
  return (
    <section className="login-page">
      <StyledH1>This is the LogIn Page</StyledH1>
      <FormikLogInForm />
        
    </section>
  );
}