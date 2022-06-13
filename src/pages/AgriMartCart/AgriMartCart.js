import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';
import "./AgriMartCart.css";
// import '@shapla/react-delete-icon/dist/delete-icon.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';
import { Form } from 'react-bootstrap';
const Cart =() =>{
  
  const { 
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();


  

  if (isEmpty) return <div className='row'>
                        <AgriMartNavBar/>
                          <div className='row2'>
                           <h1 >Your Cart is Empty</h1>
                          </div>

                          <div className='row3'>
                           <Link to="/ToProducts"><button className='shop'>Shop Now</button></Link>
                          </div>
                      </div>
  return (
    <>
      <AgriMartNavBar/>
      <div className='py-4'>
        <div className='container'>
          <div className='row'>
              <div className='col-md-7'>
                <div className='card'>
                  <div className='card-header'>
                  <h4>Cart</h4>
                  </div>

                  <div className='card-body'>
                    <table className='table table-light table-hover m-0'>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th></th>    
                      </tr>
                    </thead>                 
                    <tbody>
                    {items.map((item, index)=>{
                    return(
                    <>
                      <tr key={index}>
                      {/* <input type="checkbox" value="Select" name="Select" />  */}
                      <td><img src={item.img} style={{height:'5rem',width:'5rem'}}/></td>
                      <td>{item.title}</td>
                      <td>Rs. {item.price}</td>

                      
                      <td>   
                      <div className='addbtn'><RemoveIcon  onClick={()=> updateItemQuantity(item.id, item.quantity - 1) } style={{height:'1rem', width:'1rem'}}/>
                      {item.quantity}
                      <AddIcon onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} style={{height:'1rem', width:'1rem'}}/></div></td>
                      <td>
                      <button className='btn ms-2' onClick={() => removeItem(item.id)}>
                        <DeleteIcon/>
                        </button>
                      </td>
                      </tr>
                    </>
                    )
                    })}
                    </tbody>
                    </table>
                  </div>
                {/* <div className='col-auto ms-auto'><h4>Cart Total Price: Rs {cartTotal}</h4></div> */}
                <div className='row'>
                  <div className='col-auto'><Link to="/ToProducts"><button className='btn btn-primary m-2'  >Shop More</button></Link></div>
                  <div className='col-auto'> <button className='btn btn-danger m-2' onClick={() => emptyCart()}>Clear Cart</button></div>
                  
                </div> 
                </div>
              </div>

              <div className='col-md-5'>
              <div className='col-md-'>
              <div className='card' margin-top='50%'>
              <div className='card-header'>
              <h4>Order Summery</h4>
              </div>
                                  
                <div className='card-body'>
                <div className='row'>
                <table className='table table-light table-hover m-0'>
                <tr className='trow'>
                <td ><h3>Total Items</h3></td>
                <td className='txright'><h2>{totalUniqueItems}</h2></td>
                </tr>
                <tr>
                <td><h3>Total Price: </h3></td>
                <td><h3>Rs. {cartTotal}.00</h3></td>
                </tr>
                </table>
            
                <div className='col-md-6'>
                <div className='from-group mb-3'>
                <div> <Link to="/ToCheckout"><button className='btn btn-primary m-2'  Link to="/Checkout">Checkout</button></Link></div> 
                </div>
                </div>
                </div>
                </div>
              </div>                      
              </div>
              </div>
          </div>
        </div>
      </div>
</> 




  ); 
}

export default Cart;

