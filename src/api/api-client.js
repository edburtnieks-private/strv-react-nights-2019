import config from '../config';
import { getGuestToken } from './get-guest-token';
import { refreshCustomerToken } from './customers/refresh-customer-token';
import { getToken } from '../utils/token';
import { getRefreshToken } from '../utils/refresh-token';
import { SIGN_OUT } from '../routes';

const makeRequest = (url, options, token) =>
  fetch(`${config.commercelayerBaseEndpoint}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/vnd.api+json',
    },
    ...options,
  });

export const api = async (url, options) => {
  let token = getToken() || (await getGuestToken());

  try {
    let response = await makeRequest(url, options, token);

    if (response && response.status === 401) {
      const refreshToken = getRefreshToken();

      if (refreshToken) {
        token = await refreshCustomerToken();
      } else {
        token = await getGuestToken();
      }

      response = await makeRequest(url, options, token);
    }

    if (response && response.status === 401) {
      window.location.assign(SIGN_OUT);
    }

    return response.json();
  } catch (error) {
    throw new Error('Unexcpected error');
  }
};
