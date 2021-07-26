import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Navbar from './Component/FrontEnd/Home/Header/Navbar/Navbar';
import Slider from './Component/FrontEnd/Home/Header/Slider/Slider';
import Login from './Component/FrontEnd/Login/Login';

function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <Login></Login>
      <h1>Hello Mysterious!</h1>
    </div>
=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Component/FrontEnd/Home/Home/Home';

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
        </Switch>
    </Router>
>>>>>>> 900bf0dad0075d8db074de315693ab215347ac6d
  );
}

export default App;
