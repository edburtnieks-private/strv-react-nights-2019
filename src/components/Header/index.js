import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as routes from '../../routes';

const Header = () => {
  const customer = useSelector((state) => !!state.customer);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={routes.HOME}>Home</Link>
          </li>

          <li>
            <Link to={routes.CART}>Cart</Link>
          </li>

          {customer ? (
            <>
              <li>
                <Link to={routes.SIGN_OUT}>Sign out</Link>
              </li>

              <li>
                <Link to={routes.ACCOUNT}>Account</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={routes.SIGN_IN}>Sign in</Link>
              </li>

              <li>
                <Link to={routes.SIGN_UP}>Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
