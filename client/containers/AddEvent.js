import { connect } from 'react-redux';

import {addEvent} from './../actions/actions.js';

import CalendarEditor from './../components/CalendarEditor.js';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEvent: (title, start, duration, ampm, userId) => {
      dispatch(addEvent(title, start, duration, ampm, userId))
    }
  }
}

const AddEvent = connect(mapStateToProps,mapDispatchToProps)(CalendarEditor)

export default AddEvent
