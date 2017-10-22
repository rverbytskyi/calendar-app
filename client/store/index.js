import {createStore, combineReducers, applyMiddleware} from 'redux';
import throttle from 'lodash/throttle';

import calendarApp from './../reducers/reducers.js';
import {loadState, saveState} from './../localStorage/localStorage.js';

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
    //console.log(store.getState());
  }, 1000));
  return store;
}
export default configureStore
