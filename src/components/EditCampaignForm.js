import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import peopleIcon from '../images/people.png';
import cashIcon from '../images/cash.png';
import hammerIcon from '../images/hammer.png';

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

const EditCampaignForm = (props) => {
  const {values,errors,touched,status} = props;
  const [data, setData] = useState({});
  
  useEffect(() => {
    if(status) {
      
      setData({ 
        ...data, 
        ...status, 
      });
    }

  }, [status]);


  

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
            fieldName="orgName" fieldType="text" fieldPlaceHolder="OrganizationName" 
            iconImg={peopleIcon} imgTxt="Organization Icon"
            touched={touched.orgName} errors={errors.orgName}
          />

          <TextIn 
            fieldName="mission" fieldType="text" fieldPlaceHolder="MissionInformation-Optional" 
            iconImg={hammerIcon} imgTxt="Mission Icon"
            touched={touched.mission} errors={errors.mission}
          />

          <TextIn 
            fieldName="fundGoal" fieldType="text" fieldPlaceHolder="FundingGoal" 
            iconImg={cashIcon} imgTxt="Funding goal Icon"
            touched={touched.fundGoal} errors={errors.fundGoal}
          />

          <TextIn 
            fieldName="moneyRaised" fieldType="text" fieldPlaceHolder="MoneyRaised" 
            iconImg={cashIcon} imgTxt="Money raised Icon"
            touched={touched.moneyRaised} errors={errors.moneyRaised}
          />

          <SubmitBtn textDisplay={"UpdateInformation"}/>
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
      <p>{`The organization name is: ${data.orgName}`}</p>
      <p>{`The optional mission is: ${data.mission}`}</p>
      <p>{`The funding goal is: ${data.fundGoal}`}</p>
      <p>{`The money raised is: ${data.moneyRaised}`}</p>

    </>

  );
    
 
 } //End of EditCampaignForm function
 
 
 
const FormikEditCampaignForm = withFormik({
  
  mapPropsToValues({ orgName, mission, fundGoal, moneyRaised }) {
    return {
      orgName: orgName || "",
      mission: mission || "",
      fundGoal: fundGoal || "",
      moneyRaised: moneyRaised || "",
    };
  },

  validationSchema: Yup.object().shape({
    orgName: Yup.string().required("Please input an orginization name"),
    fundGoal: Yup.number().required("Please input funding goal").typeError("Please input only digits not other chars"),
    moneyRaised: Yup.number().required("Please input money raised").typeError("Please input only digits not other chars"),
  }),
  
  handleSubmit(values, { setStatus, resetForm }) {

    resetForm();
    setStatus(values);

    //I don't need the if statements here, as it seems Formik will not execute handleSubmit until
    //touched is true and there are no errors
    
  },
  
  
})(EditCampaignForm); 
  
export default FormikEditCampaignForm;