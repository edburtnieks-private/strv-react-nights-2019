import React from 'react';
import PropTypes from 'prop-types';
import { Product } from './components/Product';
import { getProduct } from '../../api/products/get-product';
import { useApi } from '../../api/use-api';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const ProductDetail = ({ match }) => {
  const { id } = match.params;
  const { data, isLoading } = useApi(() => getProduct(id), [id]);

  return (
    <>
      {isLoading && 'Loading . . .'}
      {data && <Product product={data} />}
    </>
  );
};

ProductDetail.propTypes = propTypes;

export { ProductDetail };
