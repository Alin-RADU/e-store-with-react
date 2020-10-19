import * as actionTypes from './actionTypes';

export const toogleCartHidden = () => {
  return {
    type: actionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItemCart = (item) => {
  return {
    type: actionTypes.ADD_ITEM_CART,
    payload: item,
  };
};

export const removeItemCart = (item) => {
  return {
    type: actionTypes.REMOVE_ITEM_CART,
    payload: item,
  };
};

export const clearItemCart = (item) => {
  return {
    type: actionTypes.CLEAR_ITEM_CART,
    payload: item,
  };
};
