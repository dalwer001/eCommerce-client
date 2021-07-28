import React from 'react';
import Products from '../../Home/Products/Products';
import FilterProducts from '../FilterProducts/FilterProducts';
import ShopFilter from '../ShopFilter/ShopFilter';
import ShopSidebar from '../ShopSidebar/ShopSidebar';

const Shop = () => {
    return (
        <div className="row m-0">
            <div className="col-md-3">
                <ShopSidebar></ShopSidebar>
            </div>
            <div className="col-md-9">
                <ShopFilter></ShopFilter>
                <Products></Products>
            </div>
            
        </div>
    );
};

export default Shop;