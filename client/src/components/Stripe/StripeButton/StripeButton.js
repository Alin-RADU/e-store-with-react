import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HeLjcLrnkUGsT6oPCwc86HBW2nHKpRF8K4zlnWKsCTPw8Q2TsTiD0v1DLY9pONy7DZzTkDDnDkihA04R4A46EWM007AlF4Vjw';

  const onToken = (token) => {
    console.log(
      'token -----------------------------------------------------------',
      token
    );
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error');
        alert(
          'There is an issue with your payment. Please make sure that you use the provided credit card number.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="e-store-with-react"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
