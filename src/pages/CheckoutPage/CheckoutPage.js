import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/Stripe/StripeButton/StripeButton';

import {
  selectCartItems,
  selectCartPricesSum,
} from '../../redux/selectors/cartSelectors';

import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, cartPricesSum }) => {
  const renderItems = () =>
    cartItems.map((cartItem) => (
      <CSSTransition key={cartItem.id} classNames="fade" timeout={300}>
        <CheckoutItem cartItem={cartItem} />
      </CSSTransition>
    ));

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <TransitionGroup style={{ width: '100%' }}>
        {renderItems()}
      </TransitionGroup>
      <div className="total">TOTAL: ${cartPricesSum}</div>
      <StripeCheckoutButton price={cartPricesSum} />
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartPricesSum: selectCartPricesSum,
});

export default connect(mapStateToProps)(CheckoutPage);
