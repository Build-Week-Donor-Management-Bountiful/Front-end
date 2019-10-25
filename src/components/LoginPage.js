import React from 'react';
import FormikLogInForm from './LogInForm';

import handsPic from '../images/user.png';
import Header from './Header'




export default function LoginPage() {
  return (
    <div className="login">
      <Header/>
      <section className="login-page">

        <FormikLogInForm {...props}/>
          
      </section>
    </div>
  );
}