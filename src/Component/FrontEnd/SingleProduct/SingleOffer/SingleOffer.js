import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ProductReviews from '../ProductReviews/ProductReviews';
import SingleOfferDetails from '../SingleOfferDetails/SingleOfferDetails';

const SingleOffer = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SingleOfferDetails />
            <ProductReviews></ProductReviews>
        </div>
    );
};

export default SingleOffer;