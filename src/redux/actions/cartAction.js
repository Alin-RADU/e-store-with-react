import * as actionTypes from './actionTypes';

export const toogleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemCart = (item) => ({
  type: actionTypes.ADD_ITEM_CART,
  payload: item,
});

export const removeItemCart = (item) => ({
  type: actionTypes.REMOVE_ITEM_CART,
  payload: item,
});

export const clearItemCart = (item) => ({
  type: actionTypes.CLEAR_ITEM_CART,
  payload: item,
});

export const clearAllItemsFromCart = () => ({
  type: actionTypes.CLEAR_ALL_ITEMS_FROM_CART,
});
