import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./Component/FrontEnd/Login/Login"
import Home from './Component/FrontEnd/Home/Home/Home';
import axios from 'axios';
import SingleProduct from './Component/FrontEnd/SingleProduct/SingleProduct/SingleProduct';
import { createContext, useState } from 'react';
import Footer from './Component/FrontEnd/Shared/Footer/Footer';
import Gallery from './Component/FrontEnd/Gallery/Gallery';
import Cart from './Component/FrontEnd/Home/Cart/Cart';
import Navbar from './Component/FrontEnd/Shared/Navbar/Navbar';
import Shop from './Component/FrontEnd/Shop/Shop/Shop';
import OurCompany from './Component/FrontEnd/FooterInfo/AboutUs/OurCompany/OurCompany';
import History from './Component/FrontEnd/FooterInfo/AboutUs/History/History';
import Contact from './Component/FrontEnd/FooterInfo/AboutUs/Contact/Contact';
import Offers from './Component/FrontEnd/Home/Offers/Offers';
axios.defaults.baseURL = "https://fakestoreapi.com";

export const UserContext = createContext();
export const CartContext = createContext();
export const QuantityContext = createContext();
export const TotalContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [grandQuantity, setGrandQuantity] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <CartContext.Provider value={[cartProducts, setCartProducts]}>
        <QuantityContext.Provider value={[grandQuantity, setGrandQuantity]}>
          <TotalContext.Provider value={[grandTotal, setGrandTotal]}>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                {/* <Route exact path="/">
            <Home></Home>
          </Route> */}
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/products/:id">
                  <SingleProduct />
                </Route>
                <Route path="/gallery">
                  <Gallery></Gallery>
                </Route>
                <Route path="/offer">
                  <Offers></Offers>
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>

                <Route path="/shop">
                  <Shop></Shop>
                </Route>
                {/* About us */}
                <Route path="/ourCompany">
                  <OurCompany></OurCompany>
                </Route>
                <Route path="/history">
                  <History></History>
                </Route>
                <Route path="/contact">
                  <Contact></Contact>
                </Route>
              </Switch>
              <Footer />
            </Router>
          </TotalContext.Provider>
        </QuantityContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
