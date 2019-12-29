import config from '../config';
import { fetchToken } from './token';

export const fetchProducts = async () => {
  try {
    const { access_token } = await fetchToken();

    const response = await fetch(
      `${config.commercelayerBaseEndpoint}/api/skus`,
      {
        headers: {
          Accept: 'application/vnd.api+json',
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const { data } = await response.json();

    return data.map((product) => ({
      ...product.attributes,
      id: product.id,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchProduct = async (id) => {
  try {
    const { access_token } = await fetchToken();

    const response = await fetch(
      `${config.commercelayerBaseEndpoint}/api/skus/${id}`,
      {
        headers: {
          Accept: 'application/vnd.api+json',
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const { data } = await response.json();

    return {
      ...data.attributes,
      id: data.id,
    };
  } catch (error) {
    console.log(error);
  }
};
