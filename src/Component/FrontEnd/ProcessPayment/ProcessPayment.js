import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import Navbar from '../Shared/Navbar/Navbar'
import './ProcessPayment.css'
import card from '../../../Images/credit.png'
import { useContext } from 'react';
import { TotalContext } from '../../../App';
// import SplitForm from './SplitForm';
const stripePromise = loadStripe('pk_test_51JUnsgEHPpDge6gGi8ntGPv0w7QXMAsVzhcjrTvVQ0rTA828K6e6FjHRCEaWh6CIBzjqlypLnXnDcOJmRzdyQlx700lp8xdcwO');


const ProcessPayment = ({handlePayment}) => {
    const [grandTotal, setGrandTotal] = useContext(TotalContext);
    const cost = 50;
    const productTotal = grandTotal + cost;

    return (
        <>
           <div>
           <Navbar></Navbar>
           </div>
          <div className="row justify-content-center pay m-0 ">
 <div className="payment-card pay-control  col-md-4">
                 <h1>Payment Method</h1>
             <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
             </div>
              <div className="col-md-4 pay-control pay-details">
        
                        <h1 className>Order Summary</h1>
                        <div className="d-flex ">
                           
                            
                                <h3> Total Cost: ${productTotal}</h3>
                         
                        </div>

                        
                        </div>
                  

               
          </div>
           
             
            
            </>
        
    );
};

export default ProcessPayment;