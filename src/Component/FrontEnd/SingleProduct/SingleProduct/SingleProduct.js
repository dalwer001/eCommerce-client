import React from 'react';
import ProductReviews from '../ProductReviews/ProductReviews';
import SingleProductsDetails from '../SingleProductDetails/SingleProductsDetails';

import './SingleProduct.css';

const SingleProduct = () => {
    return (
        <div>
            <SingleProductsDetails/>
            <ProductReviews></ProductReviews>
        </div>
    );
};

export default SingleProduct;