import React from 'react';
import PropTypes from 'prop-types';

import css from './../css/Event.css';

const Event = ({event,earliest, delEvent}) => {

  let dimension = document.getElementById("events-list-container").clientHeight/540;

  const calcHeight = (duration) => {
    return duration*dimension
  }

  const calcOffset = (start, earliest) => {
    return (start - earliest)*dimension
  }

  return (
    <div className="event" style={{height: calcHeight(event.duration), marginTop: calcOffset(event.start, earliest)}}>
      <p className="event-title">{event.title}</p>
      <div className="event-delete" onClick={delEvent}><i className="material-icons">&#xE872;</i></div>
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    ampm: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    removed: PropTypes.bool
  }).isRequired,
  earliest: PropTypes.number.isRequired,
  delEvent: PropTypes.func.isRequired
}

export default Event;
