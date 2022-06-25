import React from 'react';
import {Card,Table} from "react-bootstrap";
import { Link } from 'react-router-dom';
import FormItem from "antd/lib/form/FormItem";
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import './AgriMartPayment.css';
import { Nav, Row, Col, Label, NavItem} from 'react-bootstrap';
import viber from '../../resources/images/viber.png'
import whatsapp from '../../resources/images/wssap.png'
import {Radio, Button, Typography, currentValueRadio, setcurrentValueRadio,Tabs, Space} from 'antd';
import TextArea from "antd/lib/input/TextArea";

//---------TabPane
const { TabPane } = Tabs;
function AgriMartPayment() {

//
  


  
return (    
<div className="App">
<>
<AgriMartNavBar/>

          <Row className='payment-row'>
          <Col  className='payment-col-one'>
          <Card><h1>Hope to Deal With You Again</h1></Card></Col>
            <Col className='payment-col-two'>
              <div className='card'  style={{height:'45rem',width:'48rem'}}>
                <div className='card-header'>
                <h3>Set The Payment</h3>
                  </div>
                <div className='card-body'>
                  <div className='pay-row'>
                  </div>
                  <div className='pay-row'>
                  <Radio.Group
                    >
                      <Row justify="space-between">
                        <Radio value={1}><h4>Cash On Delevery</h4></Radio>
                        <Row gutter={8}>
                          <Col md={16}>
                          <TextArea className="w-100" />
                          </Col>
                        </Row>
                        <Space></Space>
                        <Radio value={2}><h4>Bank Payment</h4></Radio>
                        <h6> Step 1 : Select a Bank</h6>
                        <Tabs type="card">
                        <TabPane tab="People's Bank" key="1">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Name</th> 
                                        <th>Account Number</th>
                                        <th>Branch</th>    
                                        </tr>
                                        <tr>
                                        <th>S.M.D.P Perera</th> 
                                        <th>324563</th>
                                        <th>Katubedda</th>    
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </Table>

                            </div>
                        </TabPane>
                        <TabPane tab="Bank of Ceylon" key="2">
                            <div class="table-style">

                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Name</th> 
                                        <th>Account Number</th>
                                        <th>Branch</th>    
                                        </tr>
                                        <tr>
                                        <th>S.M.D.P Perera</th> 
                                        <th>6354287</th>
                                        <th>Kottawa</th>    
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </Table>

                            </div>

                        </TabPane>
                        <TabPane tab="Commercial Bank" key="3">
                            <div class="table-style">

                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Name</th> 
                                        <th>Account Number</th>
                                        <th>Branch</th>    
                                        </tr>
                                        <tr>
                                        <th>S.M.D.P Perera</th> 
                                        <th>1035654</th>
                                        <th>Maharagama</th>    
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </Table>

                            </div>

                        </TabPane>
                        <TabPane tab="Nation's Trust" key="4">
                            <div class="table-style">

                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Name</th> 
                                        <th>Account Number</th>
                                        <th>Branch</th>    
                                        </tr>
                                        <tr>
                                        <th>S.M.D.P Perera</th> 
                                        <th>1254672576</th>
                                        <th>Moratuwa</th>    
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </Table>

                            </div>

                        </TabPane>
                    </Tabs>
                    
                    <h6> Step 2 : Send us a clear image of the bank slip</h6>
                    <Tabs type="card">
                        <TabPane tab="Whatsapp" key="1">
                            <div class="table-style">

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Whatsapp</th> 
                                        <th>0712 434 345</th>
                                        </tr>    
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </Table>

                            </div>
                        </TabPane>
                        <TabPane tab="Viber" key="2">
                            <div class="table-style">

                            <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Viber</th> 
                                        <th>0713 562 752</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </Table>
                            </div>
                        </TabPane>
                    </Tabs>
                      </Row>
                    </Radio.Group>               
                        <Row gutter={8}>
                        <FormItem>
                          <Col md={8}>  
                          <Link to="/ToCheckout"><div><Button type="button" primary >Back to Checkout</Button></div></Link>
                          </Col>
                          <Col md={8}>
                          <div className='pay-btn'><Button type="button" danger >Finish</Button></div>
                          </Col>
                          </FormItem>
                        </Row>
                  </div>
                </div>
              </div></Col>
          </Row>
          </>
          <div>
        <AgriMartFooter/>
      </div>
        </div>
  );
}

export default AgriMartPayment;