import { createStore, combineReducers } from 'redux';
import products from './products';
import cartItems from './cartItems';

// TODO: Migrate from redux to rematch (https://github.com/rematch/rematch)

const reducer = combineReducers({
  products,
  cartItems,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);

export default store;
