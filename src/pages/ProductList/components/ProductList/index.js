import React from 'react';
import PropTypes from 'prop-types';
import { Product } from './Product';

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};

ProductList.propTypes = propTypes;

export { ProductList };
