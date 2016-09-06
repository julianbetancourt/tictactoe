import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './sass/main.sass';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

const store = configStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
