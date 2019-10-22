import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import userIcon from '../images/user.png';
import peopleIcon from '../images/people.png';
import lockIcon from '../images/lock.png';

import TextIn from './TextIn';
import SubmitBtn from './SubmitBtn';

const FormCtrDiv = styled.div`
  margin-top:50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CancelDiv = styled.div`
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

const RegisterForm = ({values,errors,touched,status}) => {
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
              fieldName="name" fieldType="text" fieldPlaceHolder="Name" 
              iconImg={userIcon} imgTxt="User Icon"
              touched={touched.name} errors={errors.name}
          />
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
          <TextIn 
              fieldName="orgName" fieldType="text" fieldPlaceHolder="OrganizationName" 
              iconImg={peopleIcon} imgTxt="People Icon"
              touched={touched.orgName} errors={errors.orgName}
          />
          <SubmitBtn textDisplay={"Register"}/>
          <CancelDiv>
            <p>
              Or go back to LogIn page
              <span> 
              <StyledLink to='/' > here</StyledLink>
              </span>
            </p>
          </CancelDiv>
        </Form>
        
      </FormCtrDiv>

      {/* The following code is for testing purposes only */}
      {/* comment out in customer version of the code */}
      <p>{`The fullname is: ${data.name}`}</p>
      <p>{`The user name is: ${data.userName}`}</p>
      <p>{`The password is: ${data.passwd}`}</p>
      <p>{`The orginization is: ${data.orgName}`}</p>


    </>

  );
    
 
 } //End of RegisterForm function
 
 
 
const FormikRegisterForm = withFormik({
  
  mapPropsToValues({ name, userName, passwd, orgName }) {
    return {
      name: name || "",
      userName: userName || "",
      passwd: passwd || "",
      orgName: orgName || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please input the full name of the user"),
    userName: Yup.string().required("Please input a user name"),
    passwd: Yup.string().required("Please input a password").min(3,"Min of 3 chars for the password"),
    orgName: Yup.string().required("Please input an orginization name"),
  }),
  
  handleSubmit(values, { setStatus, resetForm }) {
    resetForm();
    // console.log("In the handleSubmit function and values is: ",values);
    setStatus(values);

  },
  
  
})(RegisterForm); 
  
export default FormikRegisterForm;