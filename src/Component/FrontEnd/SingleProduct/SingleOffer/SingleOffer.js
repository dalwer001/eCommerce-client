import React from 'react';
import ProductReviews from '../ProductReviews/ProductReviews';
import SingleOfferDetails from '../SingleOfferDetails/SingleOfferDetails';

const SingleOffer = () => {
    return (
        <div>
            <SingleOfferDetails />
            <ProductReviews></ProductReviews>
        </div>
    );
};

export default SingleOffer;