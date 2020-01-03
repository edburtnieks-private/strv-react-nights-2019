import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  // FETCH_PRODUCTS_FAILURE,
} from './actions';

const defaultProductState = {
  products: [],
};

const reducer = (state = defaultProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        isFetching: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        products: action.products,
        isFetching: false,
      };
    // case FETCH_PRODUCTS_FAILURE:
    //   return {
    //     ...state,
    //     errorMessage: action.errorMessage,
    //     isFetching: false,
    //   };
    default:
      return state;
  }
};

export default reducer;
