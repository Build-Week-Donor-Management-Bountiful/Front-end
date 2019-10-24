import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import userIcon from '../images/user.png';
import phoneIcon from '../images/phoneHeadset.png';
import mailIcon from '../images/mail.png';
import cashIcon from '../images/cash.png';

import TextIn from './TextIn';
import SubmitBtn from './SubmitBtn';
import DateSet from './DateSet';
import CommMeth from './CommMeth';

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
const backendServerUp = false;

function getServerData() {

  if(backendServerUp) {
    return {
      srvDonorId : "101",
      srvDonorName : "Chandler Bing",
      srvDonorEmail : "cb@yahoo.com",
      srvDonorPhoneNo : "123",
      srvLastCommDate : "03-09-2018",
      srvLastCommMeth : "phone",      
    };
  }

}


const EditDonorForm = (props) => {
  const {values,errors,touched,status,setFieldValue,setFieldTouched} = props;
  const [data, setData] = useState({});
  
  useEffect(() => {
    if(status) {
      let date = status.dateState;

      let dateString = (date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : ""+(date.getMonth()+1);
      dateString = dateString + "-" + (date.getDate()<10 ? "0"+date.getDate() : date.getDate());
      dateString = dateString + "-" + date.getFullYear();

      setData({ 
        ...data, 
        ...status, 
        "dateString": dateString,
      });
    }

  }, [status]);


  useEffect(() => {
    let response = getServerData();

    if(response) {
      setFieldValue("donorId",response.srvDonorId,false);
      setFieldValue("donorName",response.srvDonorName,false);
      setFieldValue("email",response.srvDonorEmail,false);
      setFieldValue("phoneNo",response.srvDonorPhoneNo,false);
      setFieldValue("commMeth",response.srvLastCommMeth,false);

      let year =  response.srvLastCommDate.slice(6);
      let month = parseInt(response.srvLastCommDate.slice(0,2))-1;
      let day = response.srvLastCommDate.slice(3,5)
      let dateObj = new Date(year,month,day);
      setFieldValue("dateState",dateObj,false);
    }
  }, []);

  function handleDateChange(date) {
    if(date) {
      
      setFieldValue("dateState",date,true);
      setFieldTouched("dateState",true,true);

    } else {

      setFieldValue("dateState","",true);

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
      <FormCtrDiv>
        <Form>

          <TextIn 
            fieldName="donorId" fieldType="text" fieldPlaceHolder="DonorID" 
            iconImg={userIcon} imgTxt="Donor Icon"
            touched={touched.donorId} errors={errors.donorId}
          />

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

          {/* This is for last communication date */}
          <DateSet date={values.dateState} handleDateChange={handleDateChange} errors={errors.dateState} touched={touched.dateState}/>

          {/* This is for last communication method */}
          <CommMeth  fieldName="commMeth" touched={touched.commMeth} errors={errors.commMeth} />

          <TextIn 
            fieldName="moneyGiven" fieldType="text" fieldPlaceHolder="NewMoneyDonated" 
            iconImg={cashIcon} imgTxt="Donor Icon"
            touched={touched.moneyGiven} errors={errors.moneyGiven}
          />

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
      <p>{`The donor ID is: ${data.donorId}`}</p>
      <p>{`The donor name is: ${data.donorName}`}</p>
      <p>{`The email address is: ${data.email}`}</p>
      <p>{`The phone number is: ${data.phoneNo}`}</p>
      <p>{`The date is: ${data.dateString}`}</p>
      <p>{`The donor communication method is: ${data.commMeth}`}</p>
      <p>{`The new donation amount: ${data.moneyGiven}`}</p>

    </>

  );
    
 
 } //End of AddDonorForm function
 
 
 
const FormikEditDonorForm = withFormik({
  
  mapPropsToValues({ donorId, donorName, email, phoneNo, commMeth, dateState, moneyGiven }) {
    return {
      donorId: donorId || "",
      donorName: donorName || "",
      email: email || "",
      phoneNo: phoneNo || "",
      commMeth: commMeth || "",
      dateState: dateState || "",
      moneyGiven: moneyGiven || "",
    };
  },

  validationSchema: Yup.object().shape({
    donorId: Yup.number().required("Please input donor's id number").typeError("Please input only digits not other chars").integer("Please input only digits not other chars"),
    donorName: Yup.string().required("Please input a donor name"),
    email: Yup.string().required("Please input donor's email address").email("Please enter a valid email"),
    phoneNo: Yup.number().required("Please input donor's phone number").typeError("Please input only digits not other chars")
      .min(111,"Please input a 3 digit phone number").max(999,"Please input a 3 digit phone number").integer("Please input only digits not other chars"),
    commMeth: Yup.string().oneOf(["email", "phone"],"Please choose communication method").required("Please choose communication method"),
    dateState: Yup.mixed().required("Please set a date"),
    moneyGiven: Yup.number().required("Please input new donation amount").typeError("Please input only digits not other chars"),
  }),
  
  handleSubmit(values, { setStatus, setFieldError, resetForm }) {

    resetForm();
    setStatus(values);

    //I don't need the if statements here, as it seems Formik will not execute handleSubmit until
    //touched is true and there are no errors
    
  },
  
  
})(EditDonorForm); 
  
export default FormikEditDonorForm;