import { connect } from 'react-redux';

import * as actions from '../../redux/actions/index';

import './CheckoutItem.scss';

const CheckoutItem = ({
  cartItem,
  onAddItemToCart,
  onRemoveItemFromCart,
  onClearItemCart,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="product" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          role="img"
          className="arrow"
          onClick={(item) => onRemoveItemFromCart(cartItem)}
        >
          {' '}
          &#10134;
        </span>
        <span className="value">{quantity}</span>
        <span
          role="img"
          className="arrow"
          onClick={(item) => onAddItemToCart(cartItem)}
        >
          {' '}
          &#10133;
        </span>
      </span>
      <span className="price">$ {price}</span>
      <span
        className="remove-button"
        onClick={() => {
          onClearItemCart(cartItem);
        }}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItemToCart: (item) => {
      dispatch(actions.addItemCart(item));
    },
    onRemoveItemFromCart: (item) => {
      dispatch(actions.removeItemCart(item));
    },
    onClearItemCart: (item) => {
      dispatch(actions.clearItemCart(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
