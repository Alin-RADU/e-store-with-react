import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../CartItem/CartItem';
import Button from '../../UI/Button/Button';

import { selectCartItems } from '../../../redux/selectors/cartSelectors';
import * as actions from '../../../redux/actions/cartAction';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const renderItems = () => {
    if (cartItems.length) {
      return cartItems.map((cartItem) => {
        return <CartItem key={cartItem.id} item={cartItem} />;
      });
    }
    return <span className="empty-message">YOUR CART IS EMPTY</span>;
  };

  const onClickHandler = () => {
    history.push('/checkout');
    dispatch(actions.toogleCartHidden());
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderItems()}</div>
      <Button onClick={onClickHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
