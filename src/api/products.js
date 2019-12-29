import config from '../config';
import { getToken } from './token';

export const getProducts = async () => {
  try {
    const { access_token } = await getToken();

    const response = await fetch(
      `${config.commercelayerBaseEndpoint}/api/skus`,
      {
        headers: {
          Accept: 'application/vnd.api+json',
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const json = await response.json();

    const products = json.data.map((product) => ({
      ...product.attributes,
      id: product.id,
    }));

    return products;
  } catch (error) {
    console.log(error);
  }
};
