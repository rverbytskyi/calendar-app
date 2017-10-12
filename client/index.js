import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';

import calendarApp from './reducers/reducers.js';

import {addEvent} from './actions/actions.js';

import storeFactory from './store';

import App from './components/App.js';

const store = storeFactory()

/*let store = createStore(
  calendarApp
);*/

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById("render-target")
)

console.log(store.state);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addEvent("ewfq","26","516","am"))
store.dispatch(addEvent("ewfq","26","516","am"))
store.dispatch(addEvent("ewfq","26","516","am"))
/*unsubscribe()*/
