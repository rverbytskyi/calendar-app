import C from './../constants/constants.js';

export const event = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_EVENT:
      return {
        id: action.id,
        title: action.title,
        start: action.start,
        duration: action.duration,
        ampm: action.ampm
      }
}

export const events = (state = [], action) => {
  switch (action.type) {
    case C.ADD_EVENT:
      return [...state, color({}, action)]
    case C.REMOVE_COLOR:
      return state.filter(c => c.id !== action.id)
    case C.EXPORT_EVENTS:
      return state.filter(c => c.id != null)
    default:
      return state
  }
}

export const sort = (state = [], action) => {
  switch (action.type) {
    case C.SIGN_UP:
      return state
    default:
      return state
  }
}
