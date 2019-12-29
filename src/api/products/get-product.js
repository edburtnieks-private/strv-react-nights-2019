import config from '../../config';
import { fetchToken } from '../token';
import { formatProduct } from './utils/format-product';

export const getProduct = async (id) => {
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

    return formatProduct(data);
  } catch (error) {
    console.log(error);
  }
};
