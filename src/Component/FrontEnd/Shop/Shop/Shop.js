import React from 'react';
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
                <div className="d-flex justify-content-between">
                <h4>Shop</h4>
                <a href="/home"> Back to Home</a>
                </div>
                <ShopFilter></ShopFilter>
                <FilterProducts></FilterProducts>
            </div>
            
        </div>
    );
};

export default Shop;