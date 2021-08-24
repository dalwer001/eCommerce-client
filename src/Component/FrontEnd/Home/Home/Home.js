import React from 'react';
import Slider from '../Header/Slider/Slider';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products';
import Category from '../Category/Category';
import Offers from '../Offers/Offers';
import OfferInfo from '../OfferInfo/OfferInfo';


const Home = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <Category/>
        <Products/>
        <OfferInfo></OfferInfo>
        <Footer></Footer>
      </div>
    );
};

export default Home;