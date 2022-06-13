import React from 'react'
import CustomerProfileCard from '../../components/AgriMartCustomerProfile/CustomerProfileCard';
// import CustomerData from "../../components/AgriMartCustomerProfile/CustomerData";
import CustomerData from "../../components/AgriMartCustomerProfile/CustomerData";

import Header from "../../components/Header";
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';
import { Card, Container } from 'react-bootstrap';
import "./AgriMartCustomerProfile.css"
import data from '../../components/data';
import {Row, Col, Table} from "react-bootstrap"
import "./AgriMartCustomerProfile.css"

const Productpg = () =>{
 
    return (
      <>
        <div><AgriMartNavBar/></div>
        {/* <div className="col-11 col-md-2 col-lg-3 mx-0 mb-4"></div> */}
        <div className='profile-row'>
          <Row>
            <Col>
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
                    <Card>
                        <h2>My Orders</h2>
                        
                        <Col>
                        <Card>
                            <Table border="0">
                                <tr>
                                    <td>Name:</td>
                                   
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                  
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                   
                                </tr>
                                <tr>
                                    <td>Mobile No</td>
                                  
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                   
                                </tr>
                                <tr>
                                    <td>Postal Code</td>
                                   
                                </tr>
                                <tr>
                                
                                </tr>
                            </Table>
                            
                        </Card>
                        </Col>
                    </Card>
                </Row>
            </Col>
          </Row> 
          </div>
      </> 
    );
  }
  
  export default Productpg;
  