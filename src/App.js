import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./Component/FrontEnd/Login/Login"
import Home from './Component/FrontEnd/Home/Home/Home';
import axios from 'axios';
import { createContext, useState } from 'react';

axios.defaults.baseURL = "https://fakestoreapi.com";

export const CartContext = createContext();

function App() {
  const [cartProduct, setCartProduct] = useState([]);
  return (
    <CartContext.Provider value={[cartProduct, setCartProduct]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
