import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  // TODO: Refactor
  const cartItems = useSelector(
    (state) =>
      Object.keys(state.cartItems).map((productId) => ({
        quantity: state.cartItems[productId],
        product: state.products.products.find((p) => p.id === productId),
      })),
    shallowEqual
  );

  return (
    <>
      <h1>Cart</h1>

      <ul>
        {cartItems &&
          cartItems.map((item) => (
            <li key={item.product.id}>
              <Link to={`/products/${item.product.id}`}>
                {item.product.name}
              </Link>
              <span>({item.quantity}x)</span>
            </li>
          ))}
      </ul>
    </>
  );
};

export { Cart };
