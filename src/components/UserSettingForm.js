import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import userIcon from '../images/user.png';
import lockIcon from '../images/lock.png';

import TextIn from './TextIn';
import SubmitBtn from './SubmitBtn';

//redux
import { connect } from 'react-redux'; 
import { updateUser, deleteUser } from '../actions'

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
          

          <label>
            Delete my account: 
            <Field
              type="checkbox"
              name="remove"
              checked={values.remove}
            />
          </label>
          <SubmitBtn textDisplay={"Submit"}/>
          
          
          
        </StyledForm>
        
      {/* </FormCtrDiv> */}


      {/* The following code is for testing purposes only 
     
      <p>{`The user name is: ${data.username}`}</p>
      <p>{`The password is: ${data.password}`}</p>
     */}

    </>

  );
    
 
 } //End of LogInForm function
 
 
 
const FormikUserSettingForm = withFormik({
  
  mapPropsToValues({ username, password, remove}) {
    return {
      username: username || "",
      password: password || "",
      remove: remove || false 
      
    };
  },

  
  handleSubmit(values, { props, setStatus, resetForm}) {
    resetForm();
    setStatus(values);

    if (values.remove){
      props.deleteUser()
      props.history.push('/')
    } else{
    
      props.updateUser(values)
      props.history.push('/home')

    }
    
    
    
  },
  
  
})(UserSettingForm); 
  
export default withRouter(connect(null, { updateUser, deleteUser })(FormikUserSettingForm));