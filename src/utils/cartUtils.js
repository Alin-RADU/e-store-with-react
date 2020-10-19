export const addItemToCart = (cartItems, cartItemToAdd) => {
  console.log();
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
