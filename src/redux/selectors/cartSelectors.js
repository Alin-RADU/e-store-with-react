import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (accQuantity, cartItem) => accQuantity + cartItem.quantity,
      0
    );
  }
);

export const selectCartPricesSum = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accPricesSum, cartItem) =>
        accPricesSum + cartItem.quantity * cartItem.price,
      0
    )
);
