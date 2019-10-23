import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import userIcon from '../images/user.png';
import phoneIcon from '../images/phoneHeadset.png';
import mailIcon from '../images/mail.png';

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

const AddDonorForm = ({values,errors,touched,status}) => {
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
            fieldName="donorName" fieldType="text" fieldPlaceHolder="DonorName" 
            iconImg={userIcon} imgTxt="Donor Icon"
            touched={touched.donorName} errors={errors.donorName}
          />
          <TextIn 
            fieldName="email" fieldType="email" fieldPlaceHolder="DonorEmail" 
            iconImg={mailIcon} imgTxt="Email Icon"
            touched={touched.email} errors={errors.email}
          />
          <TextIn 
            fieldName="phoneNo" fieldType="text" fieldPlaceHolder="DonorPhoneNo" 
            iconImg={phoneIcon} imgTxt="Phone Icon"
            touched={touched.phoneNo} errors={errors.phoneNo}
          />
          <SubmitBtn textDisplay={"AddDonor"}/>
          <RegisDiv>
            <p>
              Or back to Donor List
              <span> 
                <StyledLink to='/' > here</StyledLink>
              </span>
            </p>
          </RegisDiv>
        </Form>
        
      </FormCtrDiv>


      {/* The following code is for testing purposes only */}
      {/* comment out in customer version of the code */}
      <p>{`The donor name is: ${data.donorName}`}</p>
      <p>{`The email address is: ${data.email}`}</p>
      <p>{`The phone number is: ${data.phoneNo}`}</p>

    </>

  );
    
 
 } //End of AddDonorForm function
 
 
 
const FormikAddDonorForm = withFormik({
  
  mapPropsToValues({ donorName, email, phoneNo }) {
    return {
      donorName: donorName || "",
      email: email || "",
      phoneNo: phoneNo || "",
    };
  },

  validationSchema: Yup.object().shape({
    donorName: Yup.string().required("Please input a donor name"),
    email: Yup.string().required("Please input donor's email address").email("Please enter a valid email"),
    phoneNo: Yup.string().required("Please input donor's phone number").length(3,"Phone number should have 3 digits"),
  }),
  
  handleSubmit(values, { setStatus, resetForm }) {
    resetForm();
    // console.log("In the handleSubmit function and values is: ",values);
    setStatus(values);
    
  },
  
  
})(AddDonorForm); 
  
export default FormikAddDonorForm;



