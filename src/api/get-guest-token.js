import config from '../config';
import { setToken } from '../utils/token';

export const getGuestToken = async () => {
  try {
    const response = await fetch(
      `${config.commercelayerBaseEndpoint}/oauth/token`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'client_credentials',
          client_id: config.commercelayerClientId,
          scope: config.commercelayerScope,
        }),
      }
    );

    const { access_token } = await response.json();
    setToken(access_token);

    return access_token;
  } catch (error) {
    console.log(error);
  }
};
