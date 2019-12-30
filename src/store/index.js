import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import products from './products';
import cartItems from './cartItems';

// TODO: Migrate from redux to rematch (https://github.com/rematch/rematch)

const reducer = combineReducers({
  products,
  cartItems,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
