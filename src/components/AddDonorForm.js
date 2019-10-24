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

//redux
import { addDonor } from '../actions'
import { connect } from 'react-redux'

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
            fieldName="name" fieldType="text" fieldPlaceHolder="name" 
            iconImg={userIcon} imgTxt="Donor Icon"
            touched={touched.name} errors={errors.name}
          />
          <TextIn 
            fieldName="email" fieldType="email" fieldPlaceHolder="DonorEmail" 
            iconImg={mailIcon} imgTxt="Email Icon"
            touched={touched.email} errors={errors.email}
          />
          <TextIn 
            fieldName="phone" fieldType="text" fieldPlaceHolder="Donorphone" 
            iconImg={phoneIcon} imgTxt="Phone Icon"
            touched={touched.phone} errors={errors.phone}
          />

          <TextIn 
            fieldName="campaign" fieldType="text" fieldPlaceHolder="campaign donated to"
            iconImg={phoneIcon} imgTxt="Phone Icon" 
            touched={touched.campaign} errors={errors.campaign}
          />

          <TextIn 
            fieldName="amount" fieldType="text" fieldPlaceHolder="Donation amount" 
            iconImg={phoneIcon} imgTxt="Phone Icon"
            touched={touched.amount} errors={errors.amount}
          />

          <TextIn 
            fieldName="date" fieldType="text" fieldPlaceHolder="Last contacted" 
            iconImg={phoneIcon} imgTxt="Phone Icon"
            touched={touched.date} errors={errors.date}
          />  
        <SubmitBtn textDisplay={"AddDonor"}/>
          <RegisDiv>
            <p>
              Or back to Donor List
              <span> 
                <StyledLink to='/home' > here</StyledLink>
              </span>
            </p>
          </RegisDiv>
        </Form>
        
      </FormCtrDiv>


      {/* The following code is for testing purposes only */}
      {/* comment out in customer version of the code */}
      <p>{`The donor name is: ${data.name}`}</p>
      <p>{`The email address is: ${data.email}`}</p>
      <p>{`The phone number is: ${data.phone}`}</p>

    </>

  );
    
 
 } //End of AddDonorForm function
 
 
 
const FormikAddDonorForm = withFormik({
  
  mapPropsToValues({ name, email, phone, campaign, amount, date}) {
    return {
      name: name || "",
      email: email || "",
      phone: phone || "",
      campaign: campaign || '', 
      amount: amount || '', 
      date: date || ''

    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please input a donor name"),
    email: Yup.string().required("Please input donor's email address").email("Please enter a valid email"),
    phone: Yup.string().required("Please input donor's phone number"),
    campaign: Yup.string().required("Please input campaign"),
    amount: Yup.number().required("Please input amount donated"),
    date: Yup.string().required("Please input date")

  }),
  
  handleSubmit(values, { props, setStatus, resetForm }) {
    resetForm();
    // console.log("In the handleSubmit function and values is: ",values);
    setStatus(values);
    console.log({id: Math.random(), ...values})
    props.addDonor({id: Math.random(), ...values}); 
    
    
  },
  
  
})(AddDonorForm); 
  
export default connect(null, { addDonor })(FormikAddDonorForm);



/*
    id: Math.random(), 
            name: 'John Timoth',
            email: 'ysoserious@any.net',
            phone: '555-907-5955',
            campaign: 'Feed The Homeless',
            amount: 50, 
            date: '10/12/19'
*/