import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as routes from './routes';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { SignUp } from './pages/SignUp';
import { NotFound } from './pages/NotFound';
import { Header } from './components/Header';

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
        <Route path={routes.SIGN_UP} component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Provider>
  </>
);

export { App };
