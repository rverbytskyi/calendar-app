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

export function checkUserExistance(username){
  return {
    type: C.CHECK_USER,
    username
  }
}

export function signUp(username){
  return {
    type: C.CREATE_USER,
    username
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
