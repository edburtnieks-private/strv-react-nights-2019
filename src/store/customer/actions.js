import { getCustomerToken } from '../../api/customers/get-customer-token';
import { getCustomer } from '../../api/customers/get-customer';

import { removeCustomer } from '../../utils/customer';
import { setToken, removeToken } from '../../utils/token';
import { setRefreshToken, removeRefreshToken } from '../../utils/refresh-token';

export const SIGN_IN_INIT = 'customer/SIGN_IN_INIT';
export const SIGN_IN_SUCCESS = 'customer/SIGN_IN_SUCCESS';
export const SIGN_OUT_SUCCESS = 'customer/SIGN_OUT_SUCCESS';

const signInInit = (username, password) => ({
  type: SIGN_IN_INIT,
  payload: {
    username,
    password,
  },
});

const signInSuccess = (customer) => ({
  type: SIGN_IN_SUCCESS,
  payload: {
    customer,
  },
});

const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signIn = (username, password) => async (dispatch) => {
  dispatch(signInInit(username, password));

  const { owner_id, access_token, refresh_token } = await getCustomerToken(
    username,
    password
  );

  setToken(access_token);
  setRefreshToken(refresh_token);

  const customer = await getCustomer(owner_id);

  dispatch(signInSuccess(customer));
};

export const signOut = () => async (dispatch) => {
  removeToken();
  removeRefreshToken();
  removeCustomer();
  dispatch(signOutSuccess());
};
