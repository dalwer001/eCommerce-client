import React from 'react';
import Slider from '../Header/Slider/Slider';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Category from '../Category/Category';


const Home = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <Category></Category>
        <h1 class="text-center">Hello Mysterious!</h1>
        <Footer></Footer>
      </div>
    );
};

export default Home;