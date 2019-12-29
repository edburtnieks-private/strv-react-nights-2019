import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const Product = ({ product }) => {
  return (
    <li key={product.id}>
      <Link to={`/products/${product.id}`}>
        <h2>{product.name}</h2>
        <img src={product.image_url} alt={product.description} height="60" />
      </Link>
    </li>
  );
};

Product.propTypes = propTypes;

export { Product };
