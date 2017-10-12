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
