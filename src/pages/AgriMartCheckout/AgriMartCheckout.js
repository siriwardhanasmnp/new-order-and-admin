import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';
import { useForm } from 'react-hook-form';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { Input } from 'react-input-component';


import './AgriMartCheckout.css';
import './AgriMartCheckout.css'
import "./AgriMartCheckout.css"
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';


import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { inputAdornmentClasses } from '@mui/material';



const AgriMartCheckout =() =>{
  
  //validation
  const{
    register,
    formState: {errors}
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
    const { 
      isEmpty,
      items,
      cartTotal,
    } = useCart();
  
    const [fullname, setfullname] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [province, setprovince] = useState("");
    const [zipcode, setzipcode] = useState("");
    

    let handleSubmit = (e) => {
      e.preventDefault();

    try {
        const ShippingDetail = {
            fullname: fullname,
            phonenumber: phonenumber,
            email: email,
            address: address,
            city: city,
            province: province,
            zipcode: zipcode
        };
        axios({
            method: 'post',
            url: 'http://localhost:8080/createShipping',
            data: ShippingDetail
        })
            .then(res => {
                console.log('result', res);
                console.log('data', res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    catch (err) {
        console.log(err);
    }
};

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

                  <Form onSubmit={handleSubmit}>

                  <div className='col-md-4'>
                    <Form.Group controlId="name">
                      <Form.Label><PersonIcon/>Full Name</Form.Label>
                      <Form.Control required type="text" name="fullName" value={fullname} onChange={(e) => setfullname(e.target.value)} {...register("name", {required: "Name is Required"})}/>
                      
                    </Form.Group>
                    </div>
                    <div className='col-md-4'>
                    <Form.Group controlId="phone">
                      <Form.Label><CallIcon/>Phone Number</Form.Label>
                      <Form.Control required type="text" name="phone" value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} placeholder="123-4567-891" />
                      <small className='text-danger'>Phone Number is Required</small>
                    </Form.Group>
                    </div>
                    <div className='col-md-4'>
                    <Form.Group controlId="name">
                      <Form.Label><EmailIcon/>Email</Form.Label>
                      <Form.Control required type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="abcdef@gmail.com" />
                    </Form.Group>
                    </div>
                    <div className='col-md-4'>
                    <Form.Group controlId="name">
                      <Form.Label><HomeIcon/>Address</Form.Label>
                      <Form.Control required type="text" value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Street, house/apartment/unit*"/>
                    </Form.Group>
                    </div>
                    <div className='row'>
                    <div className='col'>
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <Form.Control required type="text" value={city} onChange={(e) => setcity(e.target.value)} />
                        {/* <Form.Control.Feedback type='invalid'>
                          {errors.city}
                        </Form.Control.Feedback> */}
                    </Form.Group>
                    </div>
                    

                    <div className='col'>
                    <Form.Group controlId="province">
                      <Form.Label>Province</Form.Label>
                      <Form.Control required type="text" value={province} onChange={(e) => setprovince(e.target.value)} />
                        {/* <Form.Control.Feedback type='invalid'>
                          {errors.province}
                        </Form.Control.Feedback> */}
                    </Form.Group>
                    </div>
                    
                    <div className='col'>
                    <Form.Group controlId="zip">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control required type="text" value={zipcode} onChange={(e) => setzipcode(e.target.value)}  />
                        {/* <Form.Control.Feedback type='invalid'>
                          {errors.zip}
                        </Form.Control.Feedback> */}
                    </Form.Group>
                    </div></div>    

                    <Form.Group controlId="submit-btn">
                    <Row>
                    <Col>
                    <Link to="/ToCart"><button color='red' type='button' className='btn btn-primary'>Back to Cart</button></Link></Col>
                    <Col>
                    {/* <Link to="/ToPayment"> */}
                    <Col><Link to="/ToPayment"><Button type='submit' onClick={handleSubmit} className="my-2 btn-danger" varient="danger">Proceed to Pay</Button></Link></Col>
                     
                      {/* </Link> */}
                      </Col>
                    </Row> 
                    </Form.Group> 
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



  