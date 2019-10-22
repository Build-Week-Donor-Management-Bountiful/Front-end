import React from 'react';
import { Form, withFormik } from "formik";
import * as Yup from "yup";

import Name from './Name';
import Passwd from './Passwd';
import SubmitBtn from './SubmitBtn';


const LogInForm = ({values,errors,touched,status}) => {
  return (
    <div>
      <Form>
        <Name fieldName="name" fieldType="text" fieldPlaceHolder="Name" touched={touched.name} errors={errors.name}/>
        <Passwd fieldName="passwd" touched={touched.passwd} errors={errors.passwd}/>
        <SubmitBtn textDisplay={"Submit"}/>
      </Form>
      
    </div>


  );
    
 
 } //End of LogInForm function
 
 
 
const FormikLogInForm = withFormik({
  
  mapPropsToValues({ name, passwd }) {
    return {
      name: name || "",
      passwd: passwd || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please input a name"),
    passwd: Yup.string().required("Please input a password").min(3,"Min of 3 chars for the password"),
  }),
  
  handleSubmit(values, { resetForm }) {
    resetForm();
    console.log("In the handleSubmit function and values is: ",values);
    
  },
  
  
})(LogInForm); 
  
export default FormikLogInForm;