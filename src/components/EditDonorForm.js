import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import userIcon from '../images/user.png';
import phoneIcon from '../images/phoneHeadset.png';
import mailIcon from '../images/mail.png';
import cashIcon from '../images/cash.png';
import sunnyIcon from '../images/sunny.png';

import TextIn from './TextIn';
import SubmitBtn from './SubmitBtn';
import DateSet from './DateSet';
// import CommMeth from './CommMeth';

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

// const backendServerUp = true;
// const backendServerUp = false;

// function getServerData() {
//   if(backendServerUp) {
//     return {
//       srvDonorId : "101",
//       srvDonorName : "Chandler Bing",
//       srvDonorEmail : "cb@yahoo.com",
//       srvDonorPhoneNo : "123",
//       srvLastCommDate : "03/09/2018",
//       srvLastCommMeth : "phone",      
//     };
//   }
// }

function dateObjToStr(date) {
  
  let dateString = (date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : ""+(date.getMonth()+1);
  dateString = dateString + "/" + (date.getDate()<10 ? "0"+date.getDate() : date.getDate());
  dateString = dateString + "/" + date.getFullYear();

  return dateString;
}


const EditDonorForm = (props) => {
  const {values,errors,touched,status,setFieldValue,setFieldTouched} = props;
  const [data, setData] = useState({});
  
  useEffect(() => {
    if(status) {
      let dateString = dateObjToStr(status.date);
      

      setData({ 
        ...data, 
        ...status, 
        "dateString": dateString,
      });
    }

  }, [status]);


  // useEffect(() => {
  //   let response = getServerData();

  //   if(response) {
  //     setFieldValue("donorId",response.srvDonorId,false);
  //     setFieldValue("donorName",response.srvDonorName,false);
  //     setFieldValue("email",response.srvDonorEmail,false);
  //     setFieldValue("phoneNo",response.srvDonorPhoneNo,false);
  //     setFieldValue("commMeth",response.srvLastCommMeth,false);

  //     let year =  response.srvLastCommDate.slice(6);
  //     let month = parseInt(response.srvLastCommDate.slice(0,2))-1;
  //     let day = response.srvLastCommDate.slice(3,5)
  //     let dateObj = new Date(year,month,day);
  //     setFieldValue("dateState",dateObj,false);
  //   }
  // }, []);

  function handleDateChange(date) {
    if(date) {
      
      setFieldValue("date",date,true);
      setFieldTouched("date",true,true);

    } else {

      setFieldValue("date","",true);

    }
    
  }

  // The following are for debugging and learning
  // comment out in final code
  // console.log("Before return and data is:", data);
  // console.log("Before return and values is:", values);
  // console.log("Before return and touched is:", touched);
  // console.log("Before return and errors is:", errors);

  return (
    <>

      <h1>This is EditDonorForm</h1>

      <FormCtrDiv>
        <Form>

          {/* <TextIn 
            fieldName="donorId" fieldType="text" fieldPlaceHolder="DonorID" 
            iconImg={userIcon} imgTxt="Donor Icon"
            touched={touched.donorId} errors={errors.donorId}
          /> */}

          <TextIn 
            fieldName="name" fieldType="text" fieldPlaceHolder="DonorName" 
            iconImg={userIcon} imgTxt="Donor Icon"
            touched={touched.name} errors={errors.name}
          />

          <TextIn 
            fieldName="email" fieldType="email" fieldPlaceHolder="DonorEmail" 
            iconImg={mailIcon} imgTxt="Email Icon"
            touched={touched.email} errors={errors.email}
          />

          <TextIn 
            fieldName="phone" fieldType="text" fieldPlaceHolder="DonorPhoneNo" 
            iconImg={phoneIcon} imgTxt="Phone Icon"
            touched={touched.phone} errors={errors.phone}
          />

          <TextIn 
            fieldName="campaign" fieldType="text" fieldPlaceHolder="CampaignDonatedTo" 
            iconImg={sunnyIcon} imgTxt="Campaign Icon"
            touched={touched.campaign} errors={errors.campaign}
          />

          <TextIn 
            fieldName="amount" fieldType="text" fieldPlaceHolder="DonationAmount" 
            iconImg={cashIcon} imgTxt="Cash Icon"
            touched={touched.amount} errors={errors.amount}
          />

          {/* This is for last communication date */}
          <DateSet date={values.date} handleDateChange={handleDateChange} errors={errors.date} touched={touched.date}/>

          {/* This is for last communication method */}
          {/* <CommMeth  fieldName="commMeth" touched={touched.commMeth} errors={errors.commMeth} /> */}

          <SubmitBtn textDisplay={"UpdateInformation"}/>
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
      <p>{`The campaign is: ${data.campaign}`}</p>
      <p>{`The new donation amount: ${data.amount}`}</p>
      <p>{`The date is: ${data.date?dateObjToStr(data.date):"noOneHere"}`}</p>

    </>

  );
    
 
 } //End of AddDonorForm function
 
 
 
const FormikEditDonorForm = withFormik({
  
  mapPropsToValues({ name, email, phone, campaign, amount, date }) {
    return {
      // donorId: donorId || "",
      name: name || "",
      email: email || "",
      phone: phone || "",
      campaign: campaign || "",
      amount: amount || "",
      date: date || "",
      
    };
  },

  validationSchema: Yup.object().shape({
    // donorId: Yup.number().required("Please input donor's id number").typeError("Please input only digits not other chars").integer("Please input only digits not other chars"),
    name: Yup.string().required("Please input a donor name"),
    email: Yup.string().required("Please input donor's email address").email("Please enter a valid email"),
    phone: Yup.number().required("Please input donor's phone number").typeError("Please input only digits not other chars"),
    // commMeth: Yup.string().oneOf(["email", "phone"],"Please choose communication method").required("Please choose communication method"),
    campaign: Yup.string().required("Please input a campaign name"),
    amount: Yup.number().required("Please input new donation amount").typeError("Please input only digits not other chars"),
    date: Yup.mixed().required("Please set a date"),
    
  }),
  
  handleSubmit(values, { props, setStatus, setFieldError, resetForm }) {

    resetForm();
    setStatus(values);
    console.log({id: Math.random(), ...values, date:dateObjToStr(values.date)})
    // props.addDonor({id: Math.random(), ...values, date:dateObjToStr(values.date)});
    
    
  },
  
  
})(EditDonorForm); 
  
export default FormikEditDonorForm;