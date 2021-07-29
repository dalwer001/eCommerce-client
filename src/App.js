import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginO from "./Component/FrontEnd/Login/LoginO"
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

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <CartContext.Provider value={[cartProducts, setCartProducts]}>
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
              <LoginO></LoginO>
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
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
