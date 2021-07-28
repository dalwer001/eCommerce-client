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
axios.defaults.baseURL = "https://fakestoreapi.com";

export const UserContext = createContext();
export const CartContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts)
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
