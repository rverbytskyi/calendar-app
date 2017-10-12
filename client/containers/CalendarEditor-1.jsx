import React from 'react';

import './../css/CalendarEditor.css';

export default class CalendarEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      start: "",
      duration: "",
      ampm: "am"
    };
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value})
  }

  handleStartChange(e) {
    if ((e.target.value.length <= 2) && (!e.target.value.includes(":"))) {
      if (/^[0-9]{0,2}$/.test(e.target.value)) {
        this.setState({start: e.target.value})
      };
    } else {
      if (/^[0-9]{0,2}[:][0-9]{0,2}$/.test(e.target.value)) {
        this.setState({start: e.target.value})
      };
    }
  }

  handleAmpmChange(e) {
    this.setState({ampm: e.target.value})
  }

  handleDurationChange(e) {
    if (/^[0-9]{0,3}$/.test(e.target.value)) {
      this.setState({duration: e.target.value})
    }
  }

  handleAddNewEvent(e) {
    e.preventDefault();
    const newEvent = {
      title: this.state.title,
      start: this.state.start,
      duration: this.state.duration,
      ampm: this.state.ampm
    };
    this.setState({title: "", start: "", duration: "", ampm: "am"});
  }

  render() {
    const {title, start, duration} = this.state;
    const isEnabled = title.length > 0 && start.length > 0 && duration.length > 0;
    return (
      <div className="modal fade" id="newEventModal" tabIndex="-1" role="dialog" aria-labelledby="newEventModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newEventModalLabel">Add calendar event</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleAddNewEvent.bind(this)}>
                <div className="form-group">
                  <input className="form-control" type="text" ref="title" placeholder="Enter title" value={this.state.title} onChange={this.handleTitleChange.bind(this)} required/>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input className="form-control" type="text" ref="start" placeholder="Enter hour with : separator" value={this.state.start} onChange={this.handleStartChange.bind(this)} required/>
                  </div>
                  <div className="form-group col-md-2 ml-auto">
                    <select className="form-control" ref="ampm" onChange={this.handleAmpmChange.bind(this)}>
                      <option>am</option>
                      <option>pm</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input className="form-control" type="text" ref="duration" placeholder="Enter event duration in minutes" value={this.state.duration} onChange={this.handleDurationChange.bind(this)} required/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" disabled={!isEnabled} onClick={this.handleAddNewEvent.bind(this)}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
