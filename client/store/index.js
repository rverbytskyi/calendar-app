import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import * as eventsApi from './../api/eventApi.js';
import calendarApp from './../reducers/reducers.js';
import {loadState, saveState} from './../localStorage/localStorage.js';

const configureStore = () => {
  const persistedState = loadState();
  const reducer = asyncInitialState.outerReducer(calendarApp);
  const loadStore = (persistedState) => {
    return new Promise(resolve => {
      eventsApi.getEvents(persistedState.user.id)
        .then(response => response.data)
        .then(events => { //console.log(events);
          resolve({
            ...persistedState,
            events: events
          })
        });
    });
  }
  const store = createStore(
    reducer,
    persistedState,
    compose(applyMiddleware(asyncInitialState.middleware(loadStore),thunk))
  );

  store.subscribe(throttle(() => {
    saveState({
      user: store.getState().user
    });
    console.log(store.getState());
  }, 1000));
  return store;
}
export default configureStore
