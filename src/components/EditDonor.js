import React, {useState} from 'react'; 
import {withFormik, Field, Form} from 'formik'; 
import * as Yup from 'yup'

import axios from axios; 

/*
*name
*email
*phone
*donation amount
*donor button
*/

const EditDonor = ({values, errors, touched}) => {
    const [newDonor, setNewDonor] = useState({name: '', emai: '', phone: '', donation: 0, organization: '' })
    return(
        <div className="edit-form">
            <h1>Add a New Donor</h1>
            <FormikForm>
                <Form>

                    <Field type="text" name="name" placeholder="Donor's name"/>
                    {touched.name && errors.name && (<p className="error">{errors.name}</p>)}

                    <Field type="text" name="email" placeholder="Donor's email"/>
                    {touched.email && errors.email && (<p className="error">{errors.email}</p>)}

                    <Field type="text" name="phone" placeholder="Phone Number"/>
                    {touched.phone && errors.phone && (<p className="error">{errors.phone}</p>)}

                    <Field type="number" name="donation" placeholder="Donation Amount"/>
                    {touched.donation && errors.donation && (<p className="error">{errors.donation}</p>)}

                    <Field type="text" name="organization" placeholder="Organization Donated To"/>
                    {touched.organization && errors.organization && (<p className="error">{errors.organization}</p>)}
                </Form>
            </FormikForm>
        </div>
    )
}

const AddDonorForm = withFormik({
    mapPropsToValues({
        return{

        }
    },

    validationSchema: Yup.object().shape({

    }), 

    handleSubmit(values, {resetForm, setStatus}){
        //axios
        console.log(values); 
        resetForm(); 

    }
    
})(AddDonor); 


export default AddDonorForm; 