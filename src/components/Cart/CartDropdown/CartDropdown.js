import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../CartItem/CartItem';
import Button from '../../UI/Button/Button';

import { selectCartItems } from '../../../redux/selectors/cartSelectors';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  const renderItems = () => {
    return cartItems.map((cartItem) => {
      console.log(cartItem);
      return <CartItem key={cartItem.id} item={cartItem} />;
    });
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderItems()}</div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);
