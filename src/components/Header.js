import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Badge, Container, Nav, Navbar, FormControl, Dropdown } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Cart from '../pages/AgriMartCart/AgriMartCart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Header = () => {


  //find assets by category
exports.assetsByCategory = async(req,res) => {
  const CATEGORY = req.params.assetCategory;
  const asset = await Asset.find({"assetCategory" :{$regex: new RegExp([CATEGORY?.toLowerCase()], "i") }})
  .then((assets)=>{
      res.json({data:assets,success:true})
      //res.status(400).json(assets)
  }).catch((err)=>{
          //console.log(err);
          res.status(500).send({message:"No assets like that category!",error:err.message,success:false})
  })
  
}

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

            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   Filter by Category
  </Dropdown.Toggle>

  <Dropdown.Menu>
   
    <Dropdown.Item href="#/action-2">Fruits</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Vegetables</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


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
