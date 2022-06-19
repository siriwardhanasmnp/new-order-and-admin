import React from 'react';
import {Card, Button} from "react-bootstrap";
import './AgriMartPayment.css';
import { Link } from 'react-router-dom';
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';
import { Nav, Row, Col, NavItem} from 'react-bootstrap';
import viber from '../../resources/images/viber.png'
import whatsapp from '../../resources/images/wssap.png'

function AgriMartPayment() {
  return (
    
<div className="App">
<>
{/* <AgriMartNavBar/> */}

          <Row className='payment-row'>
          {/* <div className='payment-row'> */}
          <Col  className='payment-col-one'>
          {/* <div className='payment-column-one-6'> */}
          <h1>Hope to Deal With You Again</h1></Col>
          {/* </div> */}
            {/* <div className='payment-column-two-3'> */}
            <Col className='payment-col-two'>
              <div className='card'  style={{height:'45rem',width:'48rem'}}>
                <div className='card-header'>
                <h3>Make Payment</h3>
                  </div>
                <div className='card-body'>
                  <div className='pay-row'>
                  <Card>
                    <div className='col-md-8'>
                    <div className='form-group mb-0'></div>
                    <input type="radio" value="cod" name="cod" /> 
                    <label><b><h5>Cash On Delevery</h5></b></label>
                    </div>


                    <div className='form-group mb-3'></div>
                    <label><b>Default Address</b></label>
                    <textarea rows='3' className='form-control'></textarea>
            
                  </Card>
                  </div>

                  <div className='pay-row'>
                    <div className='col-md-8'>
                    <div className='form-group mb-0'></div>
                    <input type="radio" value="cod" name="cod" /> 
                    <label><b><h4>Bank Payment</h4></b></label>
                    </div>
                  
                  <Card>
                  <Card.Body>
                  <Card.Title>Would you like to pay with bank?</Card.Title>
                  <Card.Title>Follow the steps below..</Card.Title>
                  <Card.Text>01. Pay the amount to the Agri Mart account</Card.Text>
                  <Card>
                  <Card.Header>
                  <Nav variant="pills" defaultActiveKey="#first">
                  <Nav.Item>
                  <Nav.Link href="#first">People's Bank</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link href="#second">Bank of Ceylon</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link href="#third">Commercial Bank</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link href="#fourth">Nation's Trust Bank</Nav.Link>
                  </Nav.Item>
                  </Nav>
                  </Card.Header>
                  <Card.Body>
                  <Card.Title>354127651762531762</Card.Title>
                  <Card.Text>E.M.K Perera</Card.Text>
                  <Card.Text>Welimada Branch</Card.Text>
                  </Card.Body>
                  </Card>
                  <Card.Text>02. Send us a clear image of the Bank Slip</Card.Text>

                  <Card>
                  <Card.Header>
                  <Nav variant="pills" defaultActiveKey="#first">
                  <Nav.Item>
                  <Nav.Link href="#viber"><img src={viber} width={50} height={50} /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link href="#whatapp"><img src={whatsapp} width={50} height={50} />
                  </Nav.Link>
                  </Nav.Item>
                  </Nav>
                  </Card.Header>
                  <Card.Body>
                  <Card.Title>0713573565</Card.Title>
                  </Card.Body>
                  </Card>  
                  </Card.Body>
                  </Card>
                  
                  <div className='pay-btn'><button type="button" class="btn btn-primary btn-lg">Finish</button></div>
                  </div>
                </div>
              </div></Col>
            {/* </div> */}
          {/* </div> */}
          </Row>
          </>
        </div>
  );
}

export default AgriMartPayment;