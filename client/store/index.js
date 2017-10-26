import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import * as eventsApi from './../api/eventApi.js';
import calendarApp from './../reducers/reducers.js';
import {loadState, saveState} from './../localStorage/localStorage.js';

const configureStore = () => {
  const persistedState = loadState();
  console.log(persistedState.user);
  const reducer = asyncInitialState.outerReducer(combineReducers({calendarApp, asyncInitialState: asyncInitialState.innerReducer}))
  const loadStore = () => {
    return new Promise(resolve => {
      eventsApi.getEvents(persistedState.user.id).then(events => resolve({
        ...persistedState,
        events: events
      }))
      console.log(resolve);
      return resolve
    })
  }
  const store = createStore(
    calendarApp,
    compose(applyMiddleware(thunk,asyncInitialState.middleware(loadStore)))
  );

  store.subscribe(throttle(() =>{
    saveState({user: store.getState().user});
    console.log(store.getState());
  }, 1000));
  return store;
}
export default configureStore
