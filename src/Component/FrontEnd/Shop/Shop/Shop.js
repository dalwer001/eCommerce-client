import React from 'react';
import Products from '../../Home/Products/Products';
import Navbar from '../../Shared/Navbar/Navbar';
import FilterProducts from '../FilterProducts/FilterProducts';
import ShopFilter from '../ShopFilter/ShopFilter';
import ShopSidebar from '../ShopSidebar/ShopSidebar';

const Shop = () => {
    return (
       
        <div>
             <Navbar></Navbar>
            <div className="row m-0"> 
            <div className="col-md-3 mt-5">
                <ShopSidebar></ShopSidebar>
            </div>
            <div className="col-md-9 mt-5">
                <div className="d-flex justify-content-between mt-5">
                <h4 >Shop</h4>
                <a href="/home"> Back to Home</a>
                </div>
                <ShopFilter></ShopFilter>
                <Products></Products>
            </div>
            
        </div>
        </div>
        
    );
};

export default Shop;