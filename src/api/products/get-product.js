import { api } from '../api-client';
import { formatProduct } from './utils/format-product';

export const getProduct = async (id) => {
  const { data } = await api(`/api/skus/${id}`);
  return formatProduct(data);
};
