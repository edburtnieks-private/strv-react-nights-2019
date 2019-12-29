import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductList as ProductListComponent } from './components/ProductList';
import { getProducts } from '../../api/products/get-products';
import { useApi } from '../../api/use-api';
import { loadProducts } from '../../store/products/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useApi(async () => {
    const response = getProducts();
    const products = await response;

    dispatch(loadProducts(products));

    return response;
  }, []);
  const products = useSelector((state) => state.products);

  return (
    <>
      {isLoading && 'Loading . . .'}
      {data && <ProductListComponent products={products} />}
    </>
  );
};

export { ProductList };
