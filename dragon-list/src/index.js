import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducers from './redux/RootReducer'
import Router from './router/index'
import reportWebVitals from './reportWebVitals';

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
