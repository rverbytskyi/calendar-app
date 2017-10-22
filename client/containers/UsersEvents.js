import {connect} from 'react-redux';

import {delEvent} from './../actions/actions.js';
import EventsList from './../components/EventsList.js';

const filterEvents = (events, user) => {
  return events.filter(event => (event.userId === user.id)&&(!event.removed))
}

const mapStateToProps = (state) => {
  return {
    events: filterEvents(state.events,state.user)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delEvent: (id) => {
      dispatch(delEvent(id))
    }
  }
}

const UserEvents = connect(mapStateToProps,mapDispatchToProps)(EventsList)

export default UserEvents
