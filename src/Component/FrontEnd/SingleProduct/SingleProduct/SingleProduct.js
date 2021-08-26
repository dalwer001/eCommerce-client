import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ProductReviews from '../ProductReviews/ProductReviews';
import SingleProductsDetails from '../SingleProductDetails/SingleProductsDetails';
import './SingleProduct.css';

const SingleProduct = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SingleProductsDetails />
            <ProductReviews></ProductReviews>
        </div>
    );
};

export default SingleProduct;