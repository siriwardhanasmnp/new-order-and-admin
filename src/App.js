import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgriMartHome from './pages/AgriMartHome/AgriMartHome';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Productpg from './pages/AgriMartProducts/AgriMartProducts';
import AgriMartCustomerProfile from './pages/AgriMartCustomerProfile/AgriMartCustomerProfile';
import Cart from './pages/AgriMartCart/AgriMartCart';
import Checkout from './pages/AgriMartCheckout/AgriMartCheckout';
import { CartProvider} from 'react-use-cart';
import AgriMartPayment from './pages/AgriMartPayment/AgriMartPayment';



function App() {
  return (
   <>
   {/* <AgriMartPayment/> */}
   <Router>
    <div className="App">
    
      <Routes>
        <Route path="/"element={ <AgriMartHome/> }/>
        <Route path="/ToProducts"element={ <CartProvider><Productpg/> </CartProvider> }/>
        <Route path="/ToCart" element={ <CartProvider><Cart/></CartProvider> }/>
        <Route path="/ToCheckout"element={  <CartProvider><Checkout/></CartProvider>  }/>
        <Route path="/CustomerProfile"element={ <AgriMartCustomerProfile/>  }/>
        <Route path="/ToPayment"element={  <CartProvider><AgriMartPayment/></CartProvider>  }/>
         <Route path="/ToPayment"element={ <AgriMartPayment/> }/>
      </Routes>
    </div>
    
   </Router> 
   
   
   </>
  );
}

export default App
