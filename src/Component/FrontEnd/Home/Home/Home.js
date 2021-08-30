import React from 'react';
import Slider from '../Header/Slider/Slider';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products';
import Category from '../Category/Category';
import Offers from '../Offers/Offers';
import OfferInfo from '../OfferInfo/OfferInfo';
import CountWatch from '../CountWatch/CountWatch';


const Home = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <Category/>
        <Products/>
        <CountWatch></CountWatch>
        <OfferInfo></OfferInfo>
        <Footer></Footer>
      </div>
    );
};

export default Home;