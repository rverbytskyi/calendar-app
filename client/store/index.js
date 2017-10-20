import {createStore, combineReducers, applyMiddleware} from 'redux';
import throttle from 'lodash/throttle';

import calendarApp from './../reducers/reducers.js';
import {loadState, saveState} from './../localStorage/localStorage.js';

const logger = store => next => action => {
  let result
  console.groupCollapsed("dispatching", action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
}

const saver = store => next => action => {
  let result = next(action)
  localStorage['redux-store'] = JSON.stringify(store.getState())
  return result
}

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    calendarApp,
    persistedState
  );

  store.subscribe(throttle(() =>{
    saveState({events: store.getState().events,
    users: store.getState().users,
    user: store.getState().user});
    console.log(store.getState());
  }, 1000));
  return store;
}
export default configureStore
