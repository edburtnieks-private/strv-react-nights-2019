import React, { Component } from 'react';
import { ProductList as ProductListComponent } from './components/ProductList';
import { fetchProducts } from '../../api/products';

class ProductList extends Component {
  state = {
    isLoading: true,
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const products = await fetchProducts();
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
