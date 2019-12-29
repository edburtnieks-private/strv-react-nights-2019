import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const Product = ({ product }) => (
  <>
    <h1>{product.name}</h1>
    <img src={product.image_url} alt={product.description} height="60" />
    <p>{product.description}</p>
  </>
);

Product.propTypes = propTypes;

export { Product };
