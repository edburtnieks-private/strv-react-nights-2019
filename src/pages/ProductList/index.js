import React, { Component } from 'react';
import { ProductList as ProductListComponent } from './components/ProductList';
import { getProducts } from '../../api/products/get-products';

class ProductList extends Component {
  state = {
    isLoading: true,
    products: [],
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const products = await getProducts();
    this.setState({ isLoading: false, products });
  };

  render() {
    const { isLoading, products } = this.state;

    return (
      <>
        {isLoading && 'Loading . . .'}
        {!isLoading && <ProductListComponent products={products} />}
      </>
    );
  }
}

export { ProductList };
