import C from './../constants/constants.js';
import {v4} from 'uuid';
import * as eventsApi from './../api/eventApi.js';
import * as userApi from './../api/userApi.js';

export function addEvent (title, start, duration, ampm, userId = "") {
  let id = v4();
  return function(dispatch){
    return eventsApi.addEvent({id: id, title: title, start: start, duration: duration, ampm: ampm, userId: userId}).then(
      dispatch(addEventSuccess(id, title, start, duration, ampm, userId))
    ).catch(err => {
      throw(err)
    })
  }
}

export function addEventSuccess (id, title, start, duration, ampm, userId = "") {
  return {
    type: C.ADD_EVENT,
    id,
    title,
    start,
    duration,
    ampm,
    userId
  }
}

export function delEvent (id) {
  return function(dispatch){
    return eventsApi.deleteEvent(id).then(
      dispatch(removeEvent(id)))
      .catch(err => {
      throw(err)
    })
  }
}

export function removeEvent (id) {
  return {
    type:C.REMOVE_EVENT,
    id
  }
}

export function createUser(username){
  return function(dispatch){
    return userApi.signIn({username: username}).then(response => {
      if (response.data === ""){
        userApi.signIn({username: username}).then(response => {
          dispatch(logIn(response.data._id, response.data.username))
          console.log(response.data._id);
          dispatch(loadEvents(response.data._id))
        }).catch(err => {throw(err)})
      } else {
        dispatch(logIn(response.data._id, response.data.username));
        dispatch(loadEvents(response.data._id))
      }
    }).catch(err => {
      throw(err)
    })
  }
}

export function logIn(userId,username){
  return {
    type: C.LOG_IN,
    userId,
    username
  }
}

export function logOut(){
  return {
    type: C.LOG_OUT
  }
}

export function loadEventsSuccess(events) {
  return {
    type: C.LOAD_EVENTS,
    events
  }
}

export function loadEvents(userId){
  return function(dispatch) {
    return eventsApi.getEvents(userId).then(events => {
      dispatch(loadEventsSuccess(events.data))
    }).catch(error => {
      throw(error)
    })
  }
}
