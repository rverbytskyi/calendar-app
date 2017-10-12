import {
  combineReducers
} from 'redux'
import {
  v4
} from 'uuid';

import C from './../constants/constants.js';
import {
  addEvent
} from './../actions/actions.js';


function events(state = {}, action) {
  switch (action.type) {
    case C.ADD_EVENT:
      return [
        ...state,
        {
          id: v4(),
          title: action.title,
          start: action.start,
          duration: action.duration,
          ampm: action.ampm,
          userId: action.userId
        }
      ]
    default:
      return state
  }
}

const calendarApp = combineReducers({
  events
})

export default calendarApp
