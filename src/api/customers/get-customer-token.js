import config from '../../config';

export const getCustomerToken = async (username, password) => {
  const response = await fetch(
    `${config.commercelayerBaseEndpoint}/oauth/token`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'password',
        username,
        password,
        client_id: config.commercelayerClientId,
        scope: config.commercelayerScope,
      }),
    }
  );

  switch (response.status) {
    case 200: {
      const { owner_id, access_token, refresh_token } = await response.json();
      return {
        owner_id,
        access_token,
        refresh_token,
      };
    }
    case 401:
      throw new Error('Email or password are incorrect');
    default:
      throw new Error('Unexpected error');
  }
};
