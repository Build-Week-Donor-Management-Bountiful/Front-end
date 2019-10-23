import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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


const mapStateToProps = state => {
    return {
      id: state.username, 
      username: "anybody here?",
      password: state.username, 
      organization: state.organization.name

    }
}



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
      login: login
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please input a user name"),
    password: Yup.string().required("Please input a password").min(3,"Min of 3 chars for the password"),
  }),
  
  handleSubmit(values, { setStatus, resetForm, props}) {
    resetForm();
    // console.log("In the handleSubmit function and values is: ",values);
    
    setStatus(values);

    const user = {username: values.username, password: values.password}
    //logs user in with the credentials entered using axios.post
    axiosWithAuth()
    .post('/auth/login/', user)
    .then(
      r => {
        
        localStorage.setItem('token', r.data.token);

        values.login(user)
        props.history.push("/home")
        console.log(values)
      }
    ).catch(error => console.log(error))
    
  },
  
  
})(LogInForm); 
  
export default connect(mapStateToProps, { login })(FormikLogInForm)