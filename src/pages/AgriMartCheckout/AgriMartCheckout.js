import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';
import { useForm } from 'react-hook-form';
import { Button, Form, Row } from 'react-bootstrap';
import { useState } from 'react';


import './AgriMartCheckout.css';
import './AgriMartCheckout.css'
import "./AgriMartCheckout.css"
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';


import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const AgriMartCheckout =() =>{
  
  const { 
    isEmpty,
    items,
    cartTotal,
  } = useCart();

  const onSubmit = (data) => {
    console.log(data);
  }

  const[form, setForm] = useState({})
  const[errors, setErrors] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })

    if(!!errors[field])
    setErrors({
      ...errors,
      [field]:null
    })
  }

  const validateForm = ()=>{
    const{name, phone, email, address, city, province, zip} = form
    const newErrors ={}

    if(!name || name == "") newErrors.name = "Please enter the full name"
    if(!phone || phone == "") newErrors.phone = "Please enter the phone number"
      else if (phone.length > 10 || phone.length < 10)newErrors.phone = "Enter valid phone number"
    if(!name || email == "") newErrors.email = "Please enter the full name"
    //  else if (email.type(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))newErrors.email = "Enter valid email"
    if(!address || address == "") newErrors.address = "Please enter the street address"
    if(!city || city == "") newErrors.city = "Please enter the city"
    if(!province || province == "") newErrors.province = "Please enter the province"
    if(!zip || zip == "") newErrors.zip = "Please enter the zip code"
      else if (zip.length > 5 || zip.length < 5)newErrors.zip = "Enter valid zip code"
    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formErrors = validateForm()
    if(Object.keys(formErrors).length > 0){
      setErrors(formErrors)
    }else{
      console.log(Object);
      console.log(form);
    }

    console.log(form)
  }
  if (isEmpty) return <h1 >Your Cart is Empty</h1>
  return (
    <>
      <AgriMartNavBar/>
      <div className='content'>
          <div className='row'>
            <div className='col-md-7'>
              <div className='card'  style={{height:'45rem',width:'48rem'}}>
                <div className='card-header'>
                  <h4>Basic Information</h4>
                </div>
                <div className='card-body'>

                  <div className='row'>
                  <Form>
                  <div className='col-md-4'>
                    <Form.Group controlId="name">
                      <Form.Label><PersonIcon/>Full Name</Form.Label>
                        <Form.Control
                        type="text"
                        value = {form.name}
                        onChange={(e) => setField("name", e.target.value)}
                        isInvalid={!!errors.name}>
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>
                          {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </div>

                    <div className='col-md-4'>
                    <Form.Group controlId="phone">
                      <Form.Label><CallIcon/>Phone Number</Form.Label>
                        <Form.Control
                        type="text"
                        value = {form.phone}
                        onChange={(e) => setField("phone", e.target.value)}
                        isInvalid={!!errors.phone}>
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>
                          {errors.phone}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </div>

                    {/* <Form.Group controlId="name">
                      <Form.Label><PersonIcon/>Full Name</Form.Label>
                        <Form.Control
                        type="text">
                        </Form.Control>
                    </Form.Group> */}

                    <div className='col-md-4'>
                    <Form.Group controlId="email">
                      <Form.Label><EmailIcon/>Email Address (optional)</Form.Label>
                        <Form.Control
                        type="text"
                        value = {form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        isInvalid={!!errors.email}>
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>
                          {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </div>

                    <div className='col-md-4'>
                    <Form.Group controlId="address">
                      <Form.Label><HomeIcon/>Full Address</Form.Label>
                        <Form.Control
                        type="text"
                        value = {form.address}
                        onChange={(e) => setField("address", e.target.value)}
                        isInvalid={!!errors.address}>
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>
                          {errors.address}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </div>
                    
                    <div className='row'>
                    <div className='col'>
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                        <Form.Control
                        type="text"
                        value = {form.city}
                        onChange={(e) => setField("city", e.target.value)}
                        isInvalid={!!errors.city}>
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>
                          {errors.city}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </div>

                    <div className='col'>
                    <Form.Group controlId="province">
                      <Form.Label>Province</Form.Label>
                        <Form.Control
                        type="text"
                        value = {form.province}
                        onChange={(e) => setField("province", e.target.value)}
                        isInvalid={!!errors.province}>
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>
                          {errors.province}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </div>
                    
                    <div className='col'>
                    <Form.Group controlId="zip">
                      <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                        type="zip"
                        value = {form.zip}
                        onChange={(e) => setField("zip", e.target.value)}
                        isInvalid={!!errors.zip}>
                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>
                          {errors.zip}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="zip">
                      <Button type='submit' onClick={handleSubmit} className="my-2" varient="primary">
                        Pay
                      </Button>
                    </Form.Group>
                    </div>
                    </div>
                  </Form>
                  
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-5'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th width='20%'>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>     
                        {items.map((item, index)=>{
                                  return(
                                    <>
                                    <tr key={index}>
                                      {/* <input type="checkbox" value="Select" name="Select" />  */}
                                      <td><img src={item.img} style={{height:'2rem',width:'2rem'}}/></td>
                                      {/* <td>{item.title}</td> */}
                                      <td>Rs. {item.price}</td>
                                      <td>
                                        {item.quantity}
                                        </td>
                                      <td>
                                    Rs. {item.price*item.quantity}
                                      </td>
                                    </tr>
                                    </>
                                  )
                                })}
                  <tr>
                    <td colSpan='2' className='text-left'><b>Grand Total</b></td>
                    <td colSpan='2' className='text-end'>Rs.  {cartTotal}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
    </> 
  ); 
}

export default AgriMartCheckout;



  