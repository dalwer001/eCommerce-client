import React, { useEffect } from 'react';
// import { Elements} from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import SimpleCardForm from './SimpleCardForm';
import Navbar from '../Shared/Navbar/Navbar'
import './ProcessPayment.css'
// import card from '../../../Images/credit.png'
import { useContext } from 'react';
import { TotalContext, UserContext } from '../../../App';
import Payment from './Payment';
import { useState } from 'react';
// import SplitForm from './SplitForm';
// const stripePromise = loadStripe('pk_test_51JUnsgEHPpDge6gGi8ntGPv0w7QXMAsVzhcjrTvVQ0rTA828K6e6FjHRCEaWh6CIBzjqlypLnXnDcOJmRzdyQlx700lp8xdcwO');


const ProcessPayment = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [grandTotal, setGrandTotal] = useContext(TotalContext);
    // const [deliveryData, setDeliveryData] = useState([]);
    const cost = 50;
    const productTotal = grandTotal + cost;
    const handlePaymentSuccess = paymentId => {
        const paymentDetails = {
         
        
            
            paymentId
        }


        fetch('https://young-wildwood-60700.herokuapp.com/addPayment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(paymentDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully.');
                }
            })
    }
    
    return (
        <>
           <div>
           <Navbar></Navbar>
           </div>
          <div className="row justify-content-center pay m-0 ">
 <div className="payment-card pay-control  col-md-4">
     <h1>Payment Method</h1>
               <Payment handlePaymentSuccess={handlePaymentSuccess}></Payment>
             </div>
              <div className="col-md-4 pay-control pay-details">
        
                        <h1 className>Order Summary</h1>
                        <div className="d-flex ">
                           
                            
                                <h3> Total Cost: ${productTotal}</h3>
                                <br />
                             
                         
                        </div>

                        
                        </div>
                  

               
          </div>
           
             
            
            </>
        
    );
};

export default ProcessPayment;