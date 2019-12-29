import config from '../../config';
import { fetchToken } from '../token';
import { formatProduct } from './utils/format-product';

export const getProducts = async () => {
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

    return data.map((product) => formatProduct(product));
  } catch (error) {
    console.log(error);
  }
};
