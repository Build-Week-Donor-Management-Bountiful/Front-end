import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

//redux
import { connect } from 'react-redux'; 
import { createCampaign } from '../actions'

import cashIcon from '../images/cash.png';
import hammerIcon from '../images/hammer.png';
import sunnyIcon from '../images/sunny.png';

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

const AddCampaignForm = (props) => {
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
            fieldName="name" fieldType="text" fieldPlaceHolder="CampaignName" 
            iconImg={sunnyIcon} imgTxt="Organization Icon"
            touched={touched.name} errors={errors.name}
          />

          <TextIn 
            fieldName="mission" fieldType="text" fieldPlaceHolder="MissionInformation" 
            iconImg={hammerIcon} imgTxt="Mission Icon"
            touched={touched.mission} errors={errors.mission}
          />

          <TextIn 
            fieldName="goal" fieldType="text" fieldPlaceHolder="FundingGoal" 
            iconImg={cashIcon} imgTxt="Funding goal Icon"
            touched={touched.goal} errors={errors.goal}
          />

          

          <SubmitBtn textDisplay={"UpdateInformation"}/>
          <RegisDiv>
            <p>
              Or back to Campaign List
              <span> 
                <StyledLink to='/Campaigns' > here</StyledLink>
              </span>
            </p>
          </RegisDiv>
        </Form>
        
      </FormCtrDiv>


      {/* The following code is for testing purposes only */}
      {/* comment out in customer version of the code */}
      <p>{`The organization name is: ${data.name}`}</p>
      <p>{`The mission is: ${data.mission}`}</p>
      <p>{`The funding goal is: ${data.goal}`}</p>
      

    </>

  );
    
 
 } //End of EditCampaignForm function
 
 
 
const FormikAddCampaignForm = withFormik({
  
  mapPropsToValues({ name, mission, goal }) {
    return {
      name: name || "",
      mission: mission || "",
      goal: goal || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please input an campaign name"),
    mission: Yup.string().required("Please enter a mission"),
    goal: Yup.number().required("Please input funding goal").typeError("Please input only digits not other chars"),
    
  }),
  
  handleSubmit(values, { props, setStatus, resetForm }) {

    resetForm();
    setStatus(values);

    //I don't need the if statements here, as it seems Formik will not execute handleSubmit until
    //touched is true and there are no errors
    props.createCampaign({id: Math.random(), ...values});
    
  },
  
  
})(AddCampaignForm); 
  
export default connect(null, { createCampaign })(FormikAddCampaignForm);