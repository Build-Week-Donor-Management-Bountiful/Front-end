import React, { useState, useEffect } from 'react';
import { Link , withRouter } from 'react-router-dom';
import { Form, withFormik } from "formik";
import * as Yup from "yup";

//redux
import { connect } from 'react-redux'; 
import { login } from '../actions'

//created so I can reuse base url and auth header
import { axiosWithAuth } from '../utils/axiosWithAuth';

import styled from "styled-components";

import userIcon from '../images/user.png';
import lockIcon from '../images/lock.png';

import TextIn from './TextIn';
import SubmitBtn from './SubmitBtn';

const FormCtrDiv = styled.div`
  margin-top:50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const StyledLink = styled(Link)`
  color:blue;
  text-decoration:underline;
  font-size:16px;
  font-family: 'Muli', sans-serif;
`;






const LogInForm = ({ values,errors,touched,status }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    // console.log("This is status in useEffects: ",status);
    status && setData(status);
    
  }, [status]);

  return (
    <>
      <FormCtrDiv>
        <Form>
          <TextIn 
            fieldName="username" fieldType="text" fieldPlaceHolder="Username" 
            iconImg={userIcon} imgTxt="User Icon"
            touched={touched.username} errors={errors.username}
          />
          <TextIn 
            fieldName="password" fieldType="password" fieldPlaceHolder="Password" 
            iconImg={lockIcon} imgTxt="Password Icon"
            touched={touched.password} errors={errors.password}
          />
          <SubmitBtn textDisplay={"LogIn"}/>
          <RegisDiv>
            <p>
              Or register
              <span> 
                <StyledLink to='/register' > here</StyledLink>
              </span>
            </p>
          </RegisDiv>
        </Form>
        
      </FormCtrDiv>


      {/* The following code is for testing purposes only */}
      {/* comment out in customer version of the code 
      <p>{`The user name is: ${data.username}`}</p>
      <p>{`The password is: ${data.password}`}</p>
      <RegisDiv> 
        <StyledLink to='/addDonor' > Add New Donor Page</StyledLink>
      </RegisDiv>
      */}

    </>

  );
    
 
 } //End of LogInForm function
 
 
 
const FormikLogInForm = withFormik({
  
  mapPropsToValues({ username, password, login }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please input a user name"),
    password: Yup.string().required("Please input a password").min(3,"Min of 3 chars for the password"),
  }),
  
  handleSubmit(values, { props, setStatus, resetForm }) {
    resetForm();

    // console.log("In the handleSubmit function and values is: ",values);
    setStatus(values);
    

    //axios POST request to backend
    //You will need to send an object that looks like this: { "username": Your username here, "password": Your password here }
    props.login(values)
    props.history.push('/home')

  },
  
  
  
})(LogInForm); 
  
export default withRouter(connect(null, { login })(FormikLogInForm))