export const ADD_PRODUCT = 'cartItems/ADD';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
