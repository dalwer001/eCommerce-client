import React from 'react';
import Slider from '../Header/Slider/Slider';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products';
import Category from '../Category/Category';
import Offers from '../Offers/Offers';


const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <Category/>
        <Products/>
        <Offers></Offers>
      </div>
    );
};

export default Home;