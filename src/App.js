import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Component/FrontEnd/Home/Home/Home';
import axios from 'axios';

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
        </Switch>
    </Router>
  );
}

export default App;
