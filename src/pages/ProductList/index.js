import React from 'react';
import { ProductList as ProductListComponent } from './components/ProductList';
import { getProducts } from '../../api/products/get-products';
import { useApi } from '../../api/use-api';

const ProductList = () => {
  const { data, isLoading } = useApi(() => getProducts(), []);

  return (
    <>
      {isLoading && 'Loading . . .'}
      {data && <ProductListComponent products={data} />}
    </>
  );
};

export { ProductList };
