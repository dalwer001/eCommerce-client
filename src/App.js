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
axios.defaults.baseURL = "https://fakestoreapi.com";

export const UserContext = createContext();
export const CartContext = createContext();
export const CountContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [ProductCount, setProductCount] = useState(0);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <CartContext.Provider value={[cartProducts, setCartProducts]}>
        <CountContext.Provider value={[ProductCount, setProductCount]}>
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
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/login">
                <LoginO></LoginO>
              </Route>
              <Route path="/shop">
                <Shop></Shop>
              </Route>
            </Switch>
            <Footer />
          </Router>
        </CountContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
