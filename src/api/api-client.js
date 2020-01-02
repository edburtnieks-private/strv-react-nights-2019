import config from '../config';
import { getGuestToken } from './get-guest-token';
import { getToken } from '../utils/token';

export const api = async (url, options) => {
  let token = getToken();

  if (!token) {
    token = await getGuestToken();
  }

  const response = await fetch(`${config.commercelayerBaseEndpoint}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/vnd.api+json',
    },
    ...options,
  });

  return response.json();
};
