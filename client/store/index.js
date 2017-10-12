import {createStore, combineReducers, applyMiddleware} from 'redux';
import calendarApp from './../reducers/reducers.js';

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

const storeFactory = () =>
  createStore(
    calendarApp
  )
export default storeFactory
