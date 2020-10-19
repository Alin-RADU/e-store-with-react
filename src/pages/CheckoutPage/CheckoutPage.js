import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import {
  selectCartItems,
  selectCartPricesSum,
} from '../../redux/selectors/cartSelectors';

import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, cartPricesSum }) => {
  const renderItems = () =>
    cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ));

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
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
      {renderItems()}
      <div className="total">
        <span>TOTAL: ${cartPricesSum}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartPricesSum: selectCartPricesSum,
});

export default connect(mapStateToProps)(CheckoutPage);
