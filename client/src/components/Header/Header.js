import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartDropdown from '../Cart/CartDropdown/CartDropdown';

import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import CartIcon from '../Cart/CartIcon/CartIcon';

import { selectCurrentUser } from '../../redux/selectors/userSelectors';

import { auth } from '../../api/firebase/firebase';
import * as actions from '../../redux/actions/index';

import './Header.scss';

const Header = ({ currentUser, onClearCart }) => {
  const renderAuthLink = () => {
    if (currentUser) {
      return (
        <div
          className="option"
          onClick={() => {
            auth.signOut();
            onClearCart();
          }}
        >
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
        <Link className="option" to="/checkout">
          CHECKOUT
        </Link>
        {renderAuthLink()}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onClearCart: () => dispatch(actions.clearAllItemsFromCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
