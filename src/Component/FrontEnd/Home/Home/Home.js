import React from 'react';
import Slider from '../Header/Slider/Slider';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';


const Home = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <Products/>
        <Footer></Footer>
      </div>
    );
};

export default Home;