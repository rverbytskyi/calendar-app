import C from './../constants/constants.js';

export function addEvent (title, start, duration, ampm, userId = "") {
  return {
    type: C.ADD_EVENT,
    title,
    start,
    duration,
    ampm,
    userId
  }
}

export function getCurrentUserId(filter){
  return {
    type: C.GET_CURRENT_USER,
    filter
  }
}

export function createUser(username){
  return {
    type: C.CREATE_USER,
    username
  }
}
