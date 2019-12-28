import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App', render);
}

render();

serviceWorker.unregister();
