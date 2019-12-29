import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../store/cartItems/actions';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>{product.name}</h1>
      <img src={product.image_url} alt={product.description} height="60" />
      <p>{product.description}</p>
      {/* TODO: Extract to separate AddProduct component */}
      <button type="button" onClick={() => dispatch(addProduct(product.id))}>
        Add to Cart
      </button>
    </>
  );
};

Product.propTypes = propTypes;

export { Product };
