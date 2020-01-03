import { setRefreshToken, getRefreshToken } from '../../utils/refresh-token';
import { setToken } from '../../utils/token';
import config from '../../config';

export const refreshCustomerToken = async () => {
  const refreshToken = getRefreshToken();

  const response = await fetch(
    `${config.commercelayerBaseEndpoint}/oauth/token`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: config.commercelayerClientId,
      }),
    }
  );

  switch (response.status) {
    case 200: {
      const { refresh_token, access_token } = await response.json();
      setToken(access_token);
      setRefreshToken(refresh_token);

      return access_token;
    }
    default:
      throw new Error('Cannot refresh customer token');
  }
};
