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

export function delEvent (id) {
  return {
    type:C.REMOVE_EVENT,
    id
  }
}

export function createUser(userId,username){
  return {
    type: C.CREATE_USER,
    userId,
    username
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
