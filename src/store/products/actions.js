import { getProducts } from '../../api/products/get-products';

export const FETCH_PRODUCTS_REQUEST = 'products/FETCH_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'products/FETCH_SUCCESS';
// export const FETCH_PRODUCTS_FAILURE = 'products/FETCH_FAILURE';

const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

// const fetchProductsFailure = (errorMessage = 'Something went wrong') => ({
//   type: FETCH_PRODUCTS_SUCCESS,
//   errorMessage,
// });

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());

    return getProducts().then((products) =>
      dispatch(fetchProductsSuccess(products))
    );
  };
};
