import config from '../config';

// TODO: Save token in local storage

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

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
