import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useState } from "react";
import axios from "axios";
// import { Input } from 'react-input-component';

import "./AgriMartCheckout.css";
import "./AgriMartCheckout.css";
import "./AgriMartCheckout.css";
import AgriMartNavBar from "../../components/AgriMartNavBar/AgriMartNavBar";
import { Button, Col, Form, Input, InputNumber, Row, Select, Space } from "antd";
import FormItem from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";

import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import { inputAdornmentClasses } from "@mui/material";

const AgriMartCheckout = () => {
  const requiredValidation = [{ required: true, message: "Required" }];

  //Validation----------------------------------------

  //-------------------------------------------

  //validation
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();

  const [form] = Form.useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(form)
  const { isEmpty, items, cartTotal } = useCart();

  // const onSubmit = (data) => {
  //   console.log(data);
  // }

  const [fullname, setfullname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [province, setprovince] = useState("");
  const [zipcode, setzipcode] = useState("");

  let handleSubmit = (e) => {

    console.log(e);

    return;

    try {
      const ShippingDetail = {
        fullname: fullname,
        phonenumber: phonenumber,
        email: email,
        address: address,
        city: city,
        province: province,
        zipcode: zipcode,
      };

      axios({
        method: "post",
        url: "http://localhost:8080/createShipping",
        data: ShippingDetail,
      })
        .then((res) => {
          console.log("result", res);
          console.log("data", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  //Validation

  console.log("re-rendered");

  return (
    <>
      <AgriMartNavBar />
      <div className="content">
        <div className="row">
          <div className="col-md-7">
            <div className="card" style={{ height: "45rem", width: "48rem" }}>
              <div className="card-header">
                <h4>Basic Information</h4>
              </div>
              <div className="card-body">
                <div className="row">
          
          
                  <div>
                    <h2 class="txt-header">Add Shipping Details</h2>
                    <div class="form-style">
                      <Form
                        onFinish={handleSubmit}
                        layout="vertical"
                        labelCol={{ flex: "110px" }}
                        labelAlign="left"
                        labelWrap
                        form={form}
                        wrapperCol={{ flex: 1 }}
                      >
                        <FormItem
                          label="Full Name"
                          name="fullName"
                          required
                          
                          rules={[...requiredValidation]}
                        >
                          <Input />
                        </FormItem>

                        <FormItem
                          label="Phone Number"
                          name='Phone Number'
                          placeholder = "+94"
                          required
                          rules={[
                            { 
                              required: true, 
                              message: 'Please input your phone number!' 
                            },
                            
                            {
                              pattern: /^(?:\d*)$/,
                              message: "Value should contain numbers",
                            },
                            {
                              pattern: /^[\d]{0,10}$/,
                              message: "Enter 10 digits phone number",
                            },
                          
                          ]}
                          validateTrigger="onBlur"
                        >
                          <InputNumber className="w-100" />
                        </FormItem>

                        <FormItem
                          label="E mail (Optional)"
                          name="email"
                          
                          // rules={[
                            
                          //   {
                          //     maxLength: 10,
                          //     message: "Value should be less than 10 character",
                          //   },
                          // ]}

                        >
                          <Input type="email" />
                        </FormItem>

                        <FormItem
                          label="Address"
                          name="address"
                          required
                          rules={requiredValidation}
                        >
                          <TextArea className="w-100" />
                        </FormItem>
                        <Row gutter={8}>
                          <Col md={8}>
                            <FormItem label="City" name="city" required
                             rules={[...requiredValidation]}>
                              <TextArea className="w-100" />
                            </FormItem>
                          </Col>
                          <Col md={8}>
                            <FormItem label="Province" name="province" required
                             rules={[...requiredValidation]}>
                              <TextArea className="w-100" />
                            </FormItem>
                          </Col>
                          <Col md={8}>
                            <FormItem label="Zip Code" name="zip" required
                              rules={[
                                { 
                                  required: true, 
                                  message: 'Please input your phone number!' 
                                },
                                
                                {
                                  pattern: /^[\d]{5}$/,
                                  message: "Enter 5 digit zip code",
                                },
                              
                              ]}
                             >
                              <InputNumber className="w-5" />
                            </FormItem>
                          </Col>
                        </Row>

                        <Row gutter={8}>
                          <Col md={8}>
                         
                          </Col>
                          <Col md={8}>
                         
                          </Col>
                          <Col md={8}>
                          <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="my-2 btn-danger"
                                    varient="danger"
                                  >
                                    Save
                                  </Button>
                          </Col>
                        </Row>

                        <Row gutter={8}>
                          <Col md={8}>
                          <Link to="/ToCart">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Back to Cart
                                </button>
                              </Link>
                          </Col>
                          <Col md={8}>
                        
                          </Col>
                          <Col md={8}>
                          <Link to="/ToPayment">
                                <button
                                type="primary"
                                htmlType="submit"
                                  color="red"
                                  className="btn btn-danger"
                                >
                                  Proceed to Pay
                                </button>
                              </Link>
                          </Col>
                        </Row>

                        <Space>
                          
                        </Space>
                      </Form>
                    </div>
                  </div>
         
         
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th width="20%">Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <>
                      <tr key={index}>
                        {/* <input type="checkbox" value="Select" name="Select" />  */}
                        <td>
                          <img
                            src={item.img}
                            style={{ height: "2rem", width: "2rem" }}
                          />
                        </td>
                        {/* <td>{item.title}</td> */}
                        <td>Rs. {item.price}</td>
                        <td>{item.quantity}</td>
                        <td>Rs. {item.price * item.quantity}</td>
                      </tr>
                    </>
                  );
                })}
                <tr>
                  <td colSpan="2" className="text-left">
                    <b>Grand Total</b>
                  </td>
                  <td colSpan="2" className="text-end">
                    Rs. {cartTotal}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgriMartCheckout;
