import React from 'react';
import PropTypes from 'prop-types';

import './../css/CalendarEditor.css';

const CalendarEditor = ({user, addEvent}) => {

  let title,
    start,
    duration,
    ampm

  const makeValidById = (elementId) => {
    try {
      document.getElementById(elementId).classList.remove("is-invalid")
      document.getElementById(elementId).classList.add("is-valid")
    } catch (e) {
      console.log(e);
    }
  }

  const makeInvalidById = (elementId) => {
    try {
      document.getElementById(elementId).classList.remove("is-valid")
      document.getElementById(elementId).classList.add("is-invalid")
    } catch (e) {
      console.log(e);
    }
  }

  const resetDefault = (elementsArray) => {
    try {
      elementsArray.forEach((elementId)=>{
        document.getElementById(elementId).classList.remove("is-valid")
        document.getElementById(elementId).classList.remove("is-invalid")
      })
    } catch (e) {
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!(title.value.length > 0 && start.value.length > 0 && duration.value.length > 0)){
      if (!(title.value.length > 0)){
        makeInvalidById("event-title-inp")
      }
      if (!(start.value.length > 0)){
        makeInvalidById("event-start-inp")
      }
      if (!(duration.value.length > 0)){
        makeInvalidById("event-duration-inp")
      }
    }else{
      if (!ampm.value.trim()) {
        ampm.value = "am"
      }
      resetDefault(["event-title-inp","event-start-inp","event-duration-inp","event-ampm-inp"])
      let startMinute = toMinutes(start.value.split(':'), ampm.value)
      if ((startMinute>=0)&&(startMinute<=540)) {
        if ((startMinute+Number(duration.value))<=540) {
          addEvent(title.value, startMinute, Number(duration.value), ampm.value, user.id)
          title.value = ''
          start.value = ''
          duration.value = ''
          ampm.value = 'am'
        } else {
          makeInvalidById("event-duration-inp")
        }
      } else {
        makeInvalidById("event-start-inp")
        makeInvalidById("event-ampm-inp")
      }
    }
  }

  const toMinutes = (inp, ampm) => {
    if (inp.length > 1) {
      let hh = Number(inp[0])
      let mm = Number(inp[1])
      if (ampm==="am"){
        //0 - is 8 am
        return (hh*60+mm)-480
      }else{
        return (hh*60+mm)+240
      }
    } else {
      if (ampm==="am"){
        //0 - is 8 am
        return Number(inp[0]*60)-480
      }else{
        return Number(inp[0]*60)+240
      }

    }
  }

  const enableButton = () => {if (title.value.length > 0 && start.value.length > 0 && duration.value.length > 0){
    //document.getElementById("add-event-submit-btn").disabled = false
  }}

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        makeValidById("event-title-inp")
        break;
      case "start":
        if ((e.target.value.length <= 2) && (!e.target.value.includes(":"))) {
          if (!(/^[0-9]{0,2}$/.test(e.target.value))) {
            e.target.value = e.target.value.slice(0, -1);
          } else {
            makeValidById("event-start-inp")
          }
        } else if (!(/^[0-9]{0,2}[:][0-9]{0,2}$/.test(e.target.value))) {
            e.target.value = e.target.value.slice(0, -1);
          } else {
            makeValidById("event-start-inp")
          }
        break;
      case "duration":
      if (!(/^[0-9]*$/.test(e.target.value))) {
        e.target.value = e.target.value.slice(0, -1);
      } else {
        makeValidById("event-duration-inp")
      }
        break;
      case "ampm":
        break;
      default:
        console.log('undefined target.name');
    }

  }

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
          <form onSubmit={handleSubmit.bind(this)}>
          <div className="modal-body">

              <div className="form-group">
                <input className="form-control" type="text" name="title" id="event-title-inp" ref={inp => {
                  title = inp
                }} placeholder="Enter title" onChange={handleChange.bind(this)} required/>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input className="form-control" type="text" name="start" id="event-start-inp"ref={inp => {
                    start = inp
                  }} placeholder="Enter hour with : separator" onChange={handleChange.bind(this)} required/>
                </div>
                <div className="form-group col-md-2 ml-auto">
                  <select className="form-control" name="ampm" id="event-ampm-inp" ref={inp => {
                    ampm = inp
                  }} onChange={handleChange.bind(this)}>
                    <option>am</option>
                    <option>pm</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <input className="form-control" type="text" name="duration" id="event-duration-inp"ref={inp => {
                  duration = inp
                }} placeholder="Enter event duration in minutes" onChange={handleChange.bind(this)} required/>
              </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={resetDefault(["event-title-inp","event-start-inp","event-duration-inp","event-ampm-inp"])}>Close</button>
            <button type="button" className="btn btn-primary" id="add-event-submit-btn" onClick={handleSubmit.bind(this)}>Add</button>
          </div>
          </form>
        </div>
      </div>
    </div>

  )
}

CalendarEditor.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string
  }).isRequired,
  addEvent: PropTypes.func.isRequired
}


export default CalendarEditor
