import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/index';

import { ReactComponent as ShoppingIcon } from '../../../assets/svg/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = ({ onToggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={onToggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleCartHidden: () => dispatch(actions.toogleCartHidden()),
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
