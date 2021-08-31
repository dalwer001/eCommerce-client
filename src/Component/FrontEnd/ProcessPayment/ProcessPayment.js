import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51IeGRnC6zmfQPQheIbmBzLDvTt96GlBrhW5Iz6pLG9ndjZihu1offgwCMP4PCGlCLZ6ie7OInEmEWNLELZwpdYyE00J9LE1FzM');
const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
        <div>
             <Elements stripe={stripePromise}>
            <SimpleCardForm handlePaymentSuccess={handlePaymentSuccess}></SimpleCardForm>
       
        </Elements>
        </div>
    );
};

export default ProcessPayment;