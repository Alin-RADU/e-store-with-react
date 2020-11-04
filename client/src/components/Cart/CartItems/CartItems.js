import { connect } from 'react-redux';

import CartItem from './CartItem/CartItem';

import { selectCartItems } from '../../../redux/selectors/cartSelectors';

import './CartItems.scss';

const CartItems = ({ cartItems }) => {
  const renderItems = () => {
    if (cartItems.length) {
      return cartItems.map((cartItem) => {
        return <CartItem key={cartItem.id} item={cartItem} />;
      });
    }
    return <span className="empty-message">YOUR CART IS EMPTY</span>;
  };

  return <div className="cart-items">{renderItems()}</div>;
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartItems);
