import {combineReducers} from 'redux'
import {v4} from 'uuid';

import C from './../constants/constants.js';
import {addEvent} from './../actions/actions.js';


function events(state = [], action) {
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
          userId: action.userId,
          removed: false
        }
      ]
    case C.REMOVE_EVENT:
      return state.map(event =>
        (event.id===action.id)
        ? {...event, removed: true}
        : event
      )
    default:
      return state
  }
}

function users(state = [], action) {
  switch (action.type) {
    case C.CREATE_USER:
      return [
          ...state,
          {
            id: action.userId,
            username: action.username
          }
        ]
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
  users,
  user
})

export default calendarApp
