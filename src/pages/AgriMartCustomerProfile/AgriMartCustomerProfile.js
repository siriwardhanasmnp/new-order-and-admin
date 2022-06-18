import React from 'react'
import CustomerProfileCard from '../../components/AgriMartCustomerProfile/CustomerProfileCard';
// import CustomerData from "../../components/AgriMartCustomerProfile/CustomerData";
import CustomerData from "../../components/AgriMartCustomerProfile/CustomerData";

import Header from "../../components/Header";
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';


import { Card, CardGroup, Container } from 'react-bootstrap';
import "./AgriMartCustomerProfile.css"
import data from '../../components/data';
import {Row, Col, Table} from "react-bootstrap"
// import "./AgriMartCustomerProfile.css"

const Productpg = () =>{
 
    return (
      <>
        <div><AgriMartNavBar/></div>
        {/* <div className="col-11 col-md-2 col-lg-3 mx-0 mb-4"></div> */}
        <div className='profile-row'>
          <Row>
            <Col>
            {/* <AgriMartFilterSideBar/> */}
                <Row>
                  
                    <Card>
                        <h2>My Profile</h2>
                        <Col>
                            <img src='./myprofile'></img>
                        </Col>
                        <Col>
                        <Card>
                            <Table border="0">
                                <tr>
                                    <td>Name:</td>
                                    <td>Name</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>Name</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>Name</td>
                                </tr>
                                <tr>
                                    <td>Mobile No</td>
                                    <td>Name</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>Name</td>
                                </tr>
                                <tr>
                                    <td>Postal Code</td>
                                    <td>Name</td>
                                </tr>
                                <tr>
                                
                                </tr>
                            </Table>
                            
                        </Card>
                        </Col>
                    </Card>
                </Row>
            </Col>
            <Col>
            <Row>
           
          <Row className="g-4">
   
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>My Orders</Card.Title>
          <Card.Text>
           Track, return or buy things again.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>My Payments</Card.Title>
          <Card.Text>
            Manage payment methods and setting, view all transactions.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
   
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Login and Security</Card.Title>
          <Card.Text>
           Edit login, name, and mobile number
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
   
   

</Row>

                </Row>
            </Col>
          </Row> 

      

          </div>
      </> 
    );
  }
  
  export default Productpg;
  