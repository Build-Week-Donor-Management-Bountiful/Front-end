import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

//redux
import { connect } from 'react-redux'; 

//formik and yup used to validate form
import { Form, withFormik } from "formik";
import * as Yup from "yup";

import { signup } from '../actions'

//components to build form
import userIcon from '../images/user.png';
import peopleIcon from '../images/people.png';
import lockIcon from '../images/lock.png';

import TextIn from './TextIn';
import SubmitBtn from './SubmitBtn';





import styled from "styled-components";

/***********************Styled Components***********************/

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

/*******************End of Styled Components*******************/



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
          
          {
            /***Commented out fields that are not needed to signup a new user. This may change if backend is updated***/

            /*
            NAME:
              <TextIn 
                fieldName="name" fieldType="text" fieldPlaceHolder="Name" 
                iconImg={userIcon} imgTxt="User Icon"
                touched={touched.name} errors={errors.name}
            />
            ORGANIZATION:
              <TextIn 
                  fieldName="orgName" fieldType="text" fieldPlaceHolder="OrganizationName" 
                  iconImg={peopleIcon} imgTxt="People Icon"
                  touched={touched.orgName} errors={errors.orgName}
              />
          
          
          */
         }
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
          
          <button>Register</button>
          <CancelDiv>
            <p>
              <span>
              Already have an account?
               
              <StyledLink to='/'>login</StyledLink>
              </span>
            </p>
          </CancelDiv>
        </Form>
        
      </FormCtrDiv>




      {/* The following code is for testing purposes only */}
      {/* comment out in customer version of the code 
        <p>{`The fullname is: ${data.name}`}</p>
        <p>{`The user name is: ${data.username}`}</p>
        <p>{`The password is: ${data.password}`}</p>
        <p>{`The orginization is: ${data.orgName}`}</p>
      */}

    </>

  );
    
 
 } //End of RegisterForm function
 
 
 
const FormikRegisterForm = withFormik({
  
  mapPropsToValues({ name, username, password, orgName }) {
    return {
     
      username: username || "",
      password: password || ""

      /*
      ,name: name || "",
      orgName: orgName || ""
      */
    };
  },

  validationSchema: Yup.object().shape({
   
    username: Yup.string().required("Please input a user name"),
    password: Yup.string().required("Please input a password").min(3,"Min of 3 chars for the password"),
   
    /*
    name: Yup.string().required("Please input the full name of the user"),
    orgName: Yup.string().required("Please input an orginization name")
    */
  }),
  
  handleSubmit(values, { props, setStatus, resetForm }) {
    resetForm();

    // console.log("In the handleSubmit function and values is: ",values);
    setStatus(values);
    console.log("props:", props)

    //axios POST request to backend
    //You will need to send an object that looks like this: { "username": Your username here, "password": Your password here }
    props.signup(values, props.history)

  },
  
  
})(RegisterForm); 
  
export default connect(null, { signup })(withRouter(FormikRegisterForm));