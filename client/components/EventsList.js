import React from 'react';
import PropTypes from 'prop-types';

import Event from './Event.js';
import css from './../css/EventsList.css';

const EventsList = ({events, delEvent}) => {

  let eventsGroups, eventsInGroups
  let dimension = document.getElementById("events-list-container").clientHeight/540;

  const conflictingEvents = (events) => {
    let evList = JSON.parse(JSON.stringify(events));
    let evCopy = JSON.parse(JSON.stringify(events));
    evCopy.sort(function (a,b){return b.start - a.start});
    evList.sort(function (a,b){return a.start - b.start});
    let eventsGroups = [];
    evList.forEach(event => {
      let eventGroup = []
      for (let i=(evCopy.length-1); i>=0; i--){
        if (isConflicting(event, evCopy[i])){
          eventGroup.push(evCopy[i]._id)
          evCopy.splice(i,1)
        }
      }
      if (eventGroup.length>0){
        eventsGroups.push(eventGroup)
      }
    })
    return eventsGroups;
  }

  const isConflicting = (ev, ev2f) => {

    let diff = ev.start - ev2f.start
    if (diff <= 0){
      if ((ev.duration + diff) > 0){
        enlargeDuration(ev, ev2f, diff)
        return true
      } else {
        return false
      }
    } else {
      if ((ev2f.duration - diff) > 0){
        enlargeDuration(ev, ev2f, diff)
        return true
      } else {
        return false
      }
    }
  }

  const enlargeDuration = (ev, ev2f, diff) => {
    if ((ev.duration+diff-ev2f.duration)<0){
      ev.duration = ev2f.duration - diff
    }
  }

  const findInNested = eventId => {
    for (let i=0; i<events.length; i++){
      if (events[i]._id === eventId)
      return events[i]
    }
  }

  const eventsObjGroups = eventsGroups => {
    return eventsGroups.map(eventsGroup => {
      return eventsGroup.map(eventId => findInNested(eventId))
    })
  }

  const calcTopPos = (start) => {
    return start*dimension
  }

  return (
    <div>
      {
        eventsInGroups = eventsObjGroups(conflictingEvents(events)),
        eventsInGroups.map((eventsGroup, index) => (
          <div key={"event-group-"+index} className="event-group" style={{top: calcTopPos(eventsGroup[0].start)}}>
            {eventsGroup.map(event =>(
              <Event key={event._id} event={event} earliest = {eventsGroup[0].start} delEvent = {() => delEvent(event._id)}/>
            ))}
          </div>
        ))
      }

    </div>
  )
}

EventsList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      start: PropTypes.number,
      duration: PropTypes.number,
      ampm: PropTypes.string,
      userId: PropTypes.string,
      removed: PropTypes.bool
    }).isRequired
  ).isRequired,
  delEvent: PropTypes.func.isRequired
}

export default EventsList
