import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './actions';

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return action.payload.customer;
    case SIGN_OUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
