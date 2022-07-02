import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, Image } from 'react-bootstrap';
import './AgriMartNavBar.css';
import logo from '../../resources/images/logo.png'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Row, Col } from 'antd';
function AgriMartNavBar() {
    return (
        <Navbar class="nav-styles" collapseOnSelect fixed="top" expand="sm" style={{backgroundColor:'#001a00'}}>
            <Container>
                <Navbar.Brand href="/">
              <Row justify='space-around'>   
                <Image src={logo} height={80} width={80} />
                <h3 style={{color:'#e6ffe6', paddingLeft:'20px'}}>Agri Mart  </h3> 
            </Row>
                 </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" >
                     <Nav.Link href='/'> <h5 style={{color:'#e6ffe6', paddingLeft:'50px', fontSize:'16px'}}>Farmer Portal</h5></Nav.Link>
                        <Nav.Link href="/aboutus"><h5 style={{color:'#e6ffe6', paddingLeft:'20px', fontSize:'16px'}}>About Us</h5></Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href='/login'>Sign in</Nav.Link>

                    <Nav.Link href='/register'>Sign Up</Nav.Link>
                    </Nav>
                    <Nav>
                        <div class="profile-style">
                            <Link to="/CustomerProfile">
                            <Avatar size="large" icon={<UserOutlined />} />
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AgriMartNavBar;