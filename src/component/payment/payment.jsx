import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_BXDVTDDSgJSIYuUdMMXkfXPQ00qmsjjNPD';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    
    return(
        <StripeCheckout label = 'Pay Now'
            name = 'AirLine'
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}
export default Payment;
