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
import Gallery from './Component/FrontEnd/Gallery/Gallery';

axios.defaults.baseURL = "https://fakestoreapi.com";

function App() {
  return (
<Router>
      
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
        <Route path="/gallery">
          <Gallery></Gallery>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
