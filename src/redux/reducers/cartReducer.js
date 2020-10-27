import * as actionTypes from '../actions/actionTypes';
import { addItemToCart, removeItemFromCart } from '../../utils/cartUtils';

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case actionTypes.ADD_ITEM_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case actionTypes.REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case actionTypes.CLEAR_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case actionTypes.CLEAR_ALL_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
