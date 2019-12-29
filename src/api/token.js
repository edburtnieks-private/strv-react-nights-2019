import config from '../config';

export const getToken = async () => {
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

    const token = await response.json();

    return token;
  } catch (error) {
    console.log(error);
  }
};