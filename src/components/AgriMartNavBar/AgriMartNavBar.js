import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, Image } from 'react-bootstrap';
import './AgriMartNavBar.css';
import logo from '../../resources/images/logo.png'
function AgriMartNavBar() {
    return (
        <Navbar class="nav-styles" collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                <Image src={logo} height={70} width={70} />
                 Agri Mart   </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                     <Nav.Link href='/portal'>Farmer Portal</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <div class="badge-style">
                            <Link to="/signin">
                            <Badge pill bg="success">
                            Sign In 
                        </Badge>
                            </Link>
                        
                         {/* <Link to="/signup">
                         <Badge  pill bg="success">
                            SIgn Up
                        </Badge>
                         </Link> */}
                     
                        </div>
                    </Nav>
                    <Nav>
                        <div class="badge-style">
                            <Link to="/signUp">
                            <Badge pill bg="success">
                            Sign Up 
                        </Badge>
                            </Link>

                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AgriMartNavBar;