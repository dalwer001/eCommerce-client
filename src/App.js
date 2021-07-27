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
import Navbar from './Component/FrontEnd/Shared/Navbar/Navbar';
import Footer from './Component/FrontEnd/Shared/Footer/Footer';

axios.defaults.baseURL = "https://fakestoreapi.com";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
<Router>
  <Navbar/>
    <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          {/* <Route exact path="/">
            <Home></Home>
          </Route> */}
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/products/:id">
          <SingleProduct/>
        </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
        </Switch>
        <Footer/>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
