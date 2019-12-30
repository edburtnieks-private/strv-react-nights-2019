import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductList as ProductListComponent } from './components/ProductList';
import { fetchProducts } from '../../store/products/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { isFetching } = useSelector((state) => state.products);

  useEffect(() => {
    if (Array.isArray(products) && !products.length) {
      dispatch(fetchProducts());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isFetching && 'Loading . . .'}
      {products && <ProductListComponent products={products} />}
    </>
  );
};

export { ProductList };
