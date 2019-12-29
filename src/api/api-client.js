import config from '../config';
import { getToken } from './token';

export const api = async (url, options) => {
  const { access_token } = await getToken();
  const response = await fetch(`${config.commercelayerBaseEndpoint}${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${access_token}`,
    },
    ...options,
  });

  return response.json();
};
