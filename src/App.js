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
<<<<<<< HEAD
import Navbar from './Component/FrontEnd/Shared/Navbar/Navbar';
import Footer from './Component/FrontEnd/Shared/Footer/Footer';
=======
import Gallery from './Component/FrontEnd/Gallery/Gallery';
>>>>>>> 782ca5cd5d9fe321a709f9c6d17c36bc519d8d72

axios.defaults.baseURL = "https://fakestoreapi.com";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
<<<<<<< HEAD
<Router>
  <Navbar/>
    <Switch>
=======
      <Router>

        <Switch>
>>>>>>> 782ca5cd5d9fe321a709f9c6d17c36bc519d8d72
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
        </Switch>
<<<<<<< HEAD
        <Footer/>
    </Router>
=======
      </Router>
>>>>>>> 782ca5cd5d9fe321a709f9c6d17c36bc519d8d72
    </UserContext.Provider>
  );
}

export default App;
