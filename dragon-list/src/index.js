import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducers from './redux/RootReducer'
import './index.css';
import Router from './router/index'
import reportWebVitals from './reportWebVitals';

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
