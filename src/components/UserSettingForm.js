import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import userIcon from '../images/user.png';
import lockIcon from '../images/lock.png';

import TextIn from './TextIn';
import SubmitBtn from './SubmitBtn';

const StyledForm = styled(Form)`
  margin-top:50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpaceDiv = styled.div`
  width:20px;
  height:25px;
`;

const UserSettingForm = ({values,errors,touched,status}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    status && setData(status);
  }, [status]);

  return (
    <>
      {/* <FormCtrDiv> */}
        <StyledForm>
          <TextIn 
            fieldName="username" fieldType="text" fieldPlaceHolder="username" 
            iconImg={userIcon} imgTxt="User Icon"
            touched={touched.username} errors={errors.username}
          />
          <TextIn 
            fieldName="password" fieldType="password" fieldPlaceHolder="Password" 
            iconImg={lockIcon} imgTxt="Password Icon"
            touched={touched.password} errors={errors.password}
          />
          
          <SubmitBtn textDisplay={"Delete"}/>

          <SpaceDiv></SpaceDiv>

          <SubmitBtn textDisplay={"UpdateAccount"}/>
          
        </StyledForm>
        
      {/* </FormCtrDiv> */}


      {/* The following code is for testing purposes only */}
      {/* comment out in customer version of the code */}
      <p>{`The user name is: ${data.username}`}</p>
      <p>{`The password is: ${data.password}`}</p>
     

    </>

  );
    
 
 } //End of LogInForm function
 
 
 
const FormikUserSettingForm = withFormik({
  
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
    setStatus(values);
    
  },
  
  
})(UserSettingForm); 
  
export default FormikUserSettingForm;