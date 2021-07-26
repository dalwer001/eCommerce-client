import React from 'react';
import Slider from '../Header/Slider/Slider';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
      <div>
           <Navbar></Navbar>
        <Slider></Slider>
        <h1>Hello Mysterious!</h1>
        <Footer></Footer>
      </div>
    );
};

export default Home;