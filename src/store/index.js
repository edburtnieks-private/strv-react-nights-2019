import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import products from './products';
import cartItems from './cartItems';
import customer from './customer';
import { getCustomer } from '../utils/customer';

// TODO: Migrate from redux to rematch (https://github.com/rematch/rematch)

const reducer = combineReducers({
  products,
  cartItems,
  customer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    { ...preloadedState, customer: getCustomer() },
    composeEnhancers(applyMiddleware(thunk))
  );
