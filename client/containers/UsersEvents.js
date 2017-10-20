import {connect} from 'react-redux';

import EventsList from './../components/EventsList.js';

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

const UserEvents = connect(mapStateToProps,null)(EventsList)

export default UserEvents
