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
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/products/:id">
              <SingleProduct />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
