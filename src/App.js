import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <h1>React Nights 2019</h1>

        <Switch>
          <Route path="/products/:id" component={ProductDetail} />
          <Route exact path="/" component={ProductList} />
        </Switch>
      </>
    );
  }
}

export { App };
