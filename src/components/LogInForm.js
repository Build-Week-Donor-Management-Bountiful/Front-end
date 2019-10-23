import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, withFormik } from "formik";
import * as Yup from "yup";
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

const LogInForm = ({values,errors,touched,status}) => {
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
            fieldName="userName" fieldType="text" fieldPlaceHolder="UserName" 
            iconImg={userIcon} imgTxt="User Icon"
            touched={touched.userName} errors={errors.userName}
          />
          <TextIn 
            fieldName="passwd" fieldType="password" fieldPlaceHolder="Password" 
            iconImg={lockIcon} imgTxt="Password Icon"
            touched={touched.passwd} errors={errors.passwd}
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
      {/* comment out in customer version of the code */}
      <p>{`The user name is: ${data.userName}`}</p>
      <p>{`The password is: ${data.passwd}`}</p>
      
      

    </>

  );
    
 
 } //End of LogInForm function
 
 
 
const FormikLogInForm = withFormik({
  
  mapPropsToValues({ userName, passwd }) {
    return {
      userName: userName || "",
      passwd: passwd || "",
    };
  },

  validationSchema: Yup.object().shape({
    userName: Yup.string().required("Please input a user name"),
    passwd: Yup.string().required("Please input a password").min(3,"Min of 3 chars for the password"),
  }),
  
  handleSubmit(values, { setStatus, resetForm }) {
    resetForm();
    // console.log("In the handleSubmit function and values is: ",values);
    setStatus(values);
    
  },
  
  
})(LogInForm); 
  
export default FormikLogInForm;