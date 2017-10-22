import React from 'react';
import {connect} from 'react-redux';

import {addEvent} from './../actions/actions.js';

import './../css/CalendarEditor.css';

let CalendarEditor = ({dispatch}) => {

  let title,
    start,
    duration,
    ampm

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!ampm.value.trim()) {
      ampm.value = "am"
    }
    dispatch(addEvent(title.value, start.value, duration.value, ampm.value))
    title.value = ''
    start.value = ''
    duration.value = ''
    ampm.value = 'am'
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        break;
      case "start":
        if ((e.target.value.length <= 2) && (!e.target.value.includes(":"))) {
          if (!(/^[0-9]{0,2}$/.test(e.target.value))) {
            e.target.value = e.target.value.slice(0, -1);
          }
        } else if (!(/^[0-9]{0,2}[:][0-9]{0,2}$/.test(e.target.value))) {
            e.target.value = e.target.value.slice(0, -1);
          }
        break;
      case "duration":
      if (!(/^[0-9]*$/.test(e.target.value))) {
        e.target.value = e.target.value.slice(0, -1);
      }
        break;
      case "ampm":
        break;
      default:
        console.log('undefined target.name');
    }

  }

  const isEnabled = title.value.length > 0 && start.value.length > 0 && duration.value.length > 0;

  return (
    <div className="modal fade" id="newEventModal" tabIndex="-1" role="dialog" aria-labelledby="newEventModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add calendar event</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit.bind(this)}>
              <div className="form-group">
                <input className="form-control" type="text" name="title" ref={inp => {
                  title = inp
                }} placeholder="Enter title" onChange={handleChange.bind(this)} required/>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input className="form-control" type="text" name="start" ref={inp => {
                    start = inp
                  }} placeholder="Enter hour with : separator" onChange={handleChange.bind(this)} required/>
                </div>
                <div className="form-group col-md-2 ml-auto">
                  <select className="form-control" name="ampm" ref={inp => {
                    ampm = inp
                  }} onChange={handleChange.bind(this)}>
                    <option>am</option>
                    <option>pm</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="duration" ref={inp => {
                  duration = inp
                }} placeholder="Enter event duration in minutes" onChange={handleChange.bind(this)} required/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" disabled={!isEnabled} onClick={handleSubmit.bind(this)}>Add</button>
          </div>
        </div>
      </div>
    </div>

  )
}

CalendarEditor = connect()(CalendarEditor)

export default CalendarEditor
