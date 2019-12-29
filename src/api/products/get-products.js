import { api } from '../api-client';
import { formatProduct } from './utils/format-product';

export const getProducts = async () => {
  const { data } = await api(`/api/skus`);
  return data.map((product) => formatProduct(product));
};
