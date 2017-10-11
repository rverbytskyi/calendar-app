import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {event, events} from './../reducers/reducers.js';

const store = createStore(
  combineReducers({event, events}),
  applyMiddleware(thunk)
);
