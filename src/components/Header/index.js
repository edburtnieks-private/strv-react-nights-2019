import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.CART}>Cart</Link>
        </li>
        <li>
          <Link to={routes.SIGN_UP}>Sign up</Link>
        </li>
        <li>
          <Link to={routes.ACCOUNT}>Account</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export { Header };
