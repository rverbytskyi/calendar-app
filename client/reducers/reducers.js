import {combineReducers} from 'redux'

import C from './../constants/constants.js';
import {addEvent} from './../actions/actions.js';


function events(state = [], action) {
  switch (action.type) {
    case C.LOAD_EVENTS:
      return action.events
    case C.ADD_EVENT:
      return [
        ...state,
        {
          _id: action.id,
          title: action.title,
          start: action.start,
          duration: action.duration,
          ampm: action.ampm,
          userId: action.userId,
          removed: false
        }
      ]
    case C.REMOVE_EVENT:
      return state.map(event =>
        (event._id===action.id)
        ? {...event, removed: true}
        : event
      )
    default:
      return state
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case C.LOG_IN:
      return {
        id: action.userId,
        username: action.username
      }
    case C.LOG_OUT:
      return {}
    default:
      return state
  }
}

const calendarApp = combineReducers({
  events,
  user
})

export default calendarApp
