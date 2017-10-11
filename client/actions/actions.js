import C from './../constants/constants.js';
import {v4} from 'uuid';

export const addEvent = (title, start, duration, ampm) => {
  return {
    type: C.ADD_EVENT,
    title,
    id: v4(),
    start,
    duration,
    ampm
  }
}
