import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Badge, Container, Nav, Navbar, FormControl, Dropdown } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Cart from '../Pages/AgriMartCart/AgriMartCart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Header = () => {

  const { 
    totalUniqueItems,
  } = useCart();

    return (
        <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" style={{ height: 80 }}>
          <Container>
            <Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Text className='search'>
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
            />
            </Navbar.Text>
            <Nav>
                
                <Dropdown alignRight>
                <Link to="/ToCart">
                <Dropdown.Toggle variant="success">
                  <FaShoppingCart  color="white" fontSize="25px" />
                  <span className="e-badge e-badge-secondary e-badge-notification e-badge-overlap leftTop">({totalUniqueItems})</span>
                </Dropdown.Toggle> </Link>

                {/* <Dropdown.Menu style={{ minWidth: 370 }}>
                    <span style={{minWidth:0}}>Cart is Empty </span>
                </Dropdown.Menu> */}
                </Dropdown>
        </Nav>
          </Container>
        </Navbar>
      );
  
};

export default Header;
