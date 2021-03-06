import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './styles/base.css';

// `path` prop would probably be passed in from the server or URL
render(
  <Provider store={store}>
    <App bookId="26tniea82c" />
  </Provider>,
  document.getElementById('app'),
);
