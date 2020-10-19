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
