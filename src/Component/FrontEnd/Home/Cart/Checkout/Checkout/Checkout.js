import React from 'react';
import Footer from '../../../../Shared/Footer/Footer';
import Navbar from '../../../../Shared/Navbar/Navbar';
import CheckoutPage from '../CheckoutPage/CheckoutPage';


const Checkout = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-5">
                <CheckoutPage />
            </div>
            <Footer/>
        </div>
    );
};

export default Checkout;