import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import { NotFound } from './pages/NotFound';
import * as routes from './routes';

const App = () => (
  <>
    <Switch>
      <Route
        exact
        path={routes.HOMEPAGE}
        render={() => <Redirect to={routes.PRODUCT_LIST} />}
      />
      <Route exact path={routes.PRODUCT_LIST} component={ProductList} />
      <Route path={routes.PRODUCT_DETAIL} component={ProductDetail} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export { App };
