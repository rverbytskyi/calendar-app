import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import calendarApp from './../reducers/reducers.js';

import {addEvent} from './../actions/actions.js';

let store = createStore(
  calendarApp
);
