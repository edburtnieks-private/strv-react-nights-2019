import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { SignIn } from './pages/SignIn';
import { SignOut } from './pages/SignOut';
import { SignUp } from './pages/SignUp';
import { Account } from './pages/Account';
import { NotFound } from './pages/NotFound';
import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { configureStore } from './store';
import { getCustomer } from './utils/customer';
import * as routes from './routes';

const store = configureStore({
  customer: getCustomer(),
});

const App = () => (
  <>
    <Provider store={store}>
      <Header />
      <Switch>
        <Route
          exact
          path={routes.HOME}
          render={() => <Redirect to={routes.PRODUCT_LIST} />}
        />
        <Route exact path={routes.PRODUCT_LIST} component={ProductList} />
        <Route path={routes.PRODUCT_DETAIL} component={ProductDetail} />
        <Route path={routes.CART} component={Cart} />
        <Route path={routes.SIGN_IN} component={SignIn} />
        <Route path={routes.SIGN_OUT} component={SignOut} />
        <Route path={routes.SIGN_UP} component={SignUp} />
        <PrivateRoute path={routes.ACCOUNT} component={Account} />
        <Route component={NotFound} />
      </Switch>
    </Provider>
  </>
);

export { App };
