import React from 'react';
import Slider from '../Header/Slider/Slider';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Category from '../Category/Category';


const Home = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <Category/>
        <Products/>
        <Footer></Footer>
      </div>
    );
};

export default Home;