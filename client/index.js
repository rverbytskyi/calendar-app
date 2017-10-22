import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import {addEvent} from './actions/actions.js';

import configureStore from './store';

import App from './components/App.js';


const store = configureStore();

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById("render-target")
);

console.log(store.getState());
