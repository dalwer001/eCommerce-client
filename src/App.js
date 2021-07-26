import logo from './logo.svg';
import './App.css';
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
  );
}

export default App;
