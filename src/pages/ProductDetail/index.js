import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Product } from './components/Product';
import { getProduct } from '../../api/products/get-product';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

class ProductDetail extends Component {
  state = {
    isLoading: true,
    product: null,
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;
    this.fetchProduct(id);
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;

    if (prevProps.match.params.id !== id) {
      this.fetchProduct(id);
    }
  }

  fetchProduct = async (id) => {
    const product = await getProduct(id);
    this.setState({ isLoading: false, product });
  };

  render() {
    const { isLoading, product } = this.state;

    return (
      <>
        <Link to="/">Back</Link>
        {isLoading && 'Loading . . .'}
        {!isLoading && <Product product={product} />}
      </>
    );
  }
}

ProductDetail.propTypes = propTypes;

export { ProductDetail };
