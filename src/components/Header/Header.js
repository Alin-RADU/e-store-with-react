import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import CartIcon from '../Cart/CartIcon/CartIcon';
import CartDropdown from '../Cart/CartDropdown/CartDropdown';

import { auth } from '../../api/firebase/firebase';

import './Header.scss';

const Header = ({ currentUser, cartShowToggle }) => {
  const renderAuthLink = () => {
    if (currentUser) {
      return (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      );
    }
    return (
      <Link className="option" to="/auth">
        SIGN IN
      </Link>
    );
  };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {renderAuthLink()}
        <CartIcon />
      </div>
      {cartShowToggle ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  return {
    currentUser,
    cartShowToggle: hidden,
  };
};

export default connect(mapStateToProps)(Header);
