import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const ProductDetail = ({ match }) => {
  return (
    <>
      <h1>Product detail: {match.params.id}</h1>
    </>
  );
};

ProductDetail.propTypes = propTypes;

export { ProductDetail };
