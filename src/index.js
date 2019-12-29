import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

const render = () =>
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );

if (module.hot) {
  module.hot.accept('./App', render);
}

render();

serviceWorker.unregister();
