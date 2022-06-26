import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgriMartHome from "./pages/AgriMartHome/AgriMartHome";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Productpg from "./pages/AgriMartProducts/AgriMartProducts";
import Cart from "./pages/AgriMartCart/AgriMartCart";
import Checkout from "./pages/AgriMartCheckout/AgriMartCheckout";
import { CartProvider } from "react-use-cart";
import AgriMartPayment from "./pages/AgriMartPayment/AgriMartPayment";
import AgriMartProfile from "./pages/AgriMartProfile/AgriMartProfile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { withCurrentUserContext } from "./context/UserContext";

function App() {
  return (
    <>
      {/* <AgriMartPayment/> */}
      {/* <AgriMartFarmerProductManagement/> */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<AgriMartHome />} />
            <Route
              path="/ToProducts"
              element={
                <CartProvider>
                  <Productpg />{" "}
                </CartProvider>
              }
            />
            <Route
              path="/ToCart"
              element={
                <CartProvider>
                  <Cart />
                </CartProvider>
              }
            />
            <Route
              path="/ToCheckout"
              element={
                <CartProvider>
                  <Checkout />
                </CartProvider>
              }
            />
            <Route path="/CustomerProfile" element={<AgriMartProfile />} />
            <Route
              path="/ToPayment"
              element={
                <CartProvider>
                  <AgriMartPayment />
                </CartProvider>
              }
            />
            <Route path="/ToPayment" element={<AgriMartPayment />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
