import React, {useState, useEffect} from 'react'; 
import {withFormik, Field, Form} from 'formik'; 
import * as Yup from 'yup'

import axios from 'axios'; 

/*
*name
*email
*phone
*donation amount
*donor button
*/

const AddDonor = ({values, errors, touched, status}) => {
    const [newDonor, setNewDonor] = useState({name: '', emai: '', phone: '', donation: 0, campaign: '' })
    useEffect(() => {
        if( status) { 
            setNewDonor({...newDonor, status})
        }
    },[status])
    return(
        <div className="edit-form">
            <h1>Add a New Donor</h1>
            <p>Fill out the following form to update form</p>
            <Form>
                <Form>

                    <Field type="text" name="name" placeholder="Donor's name"/>
                    {touched.name && errors.name && (<p className="error">{errors.name}</p>)}

                    <Field type="text" name="email" placeholder="Donor's email"/>
                    {touched.email && errors.email && (<p className="error">{errors.email}</p>)}

                    <Field type="text" name="phone" placeholder="Phone Number"/>
                    {touched.phone && errors.phone && (<p className="error">{errors.phone}</p>)}

                    <Field type="number" name="donation" placeholder="Donation Amount"/>
                    {touched.donation && errors.donation && (<p className="error">{errors.donation}</p>)}

                    <Field type="text" name="campaign" placeholder="campaign Donated To"/>
                    {touched.campaign && errors.campaign && (<p className="error">{errors.campaign}</p>)}

                    <button>Update Info</button>
                </Form>
            </Form>
        </div>
    )
}

const AddDonorForm = withFormik({
    mapPropsToValues({name, phone, email, donation, organization}){
        return{
            name: name || '', 
            phone: phone || '', 
            emai: email || '', 
            donation: donation || '', 
            organization: organization || '', 
        }; 
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("You must enter donor's name"), 
        emai: Yup.string().required("Email required"), 
        phone: Yup.number().required("A phone number is required"), 
        donation: Yup.string().required("Please enter donation"), 
        campaign: Yup.string().required('Please enter campaign'), 
    }), 

    handleSubmit(values, {resetForm, setStatus}){
        //axios
        setStatus(values)
        console.log(values); 
        resetForm(); 

    }
    
})(AddDonor); 


export default AddDonorForm; 