import React from 'react';

import UserEvents from './../containers/UsersEvents.js';
import css from './../css/CalendarBack.css';

export default class CalendarBack extends React.Component {
  constructor() {
    super()
    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    this.setState({ready: true})
  }

  render() {
    let hourRows = [];
    const ready = this.state.ready;
    const hourMarks = [8,9,10,11,12,1,2,3,4,5];
    for (let i = 0; i < hourMarks.length; i++) {
      if (i !== (hourMarks.length - 1)) {
        hourRows.push(
          <div className="hour-row" key={i}>
            <p className="hour-mark">{String(hourMarks[i]) + ":00"}</p>
            <p className="half hour-mark">{String(hourMarks[i]) + ":30"}</p>
          </div>
        ),
        hourRows.push(
          <div className="hour-event-area" key={i + "-area"} style={{
            gridRow: i + 1
          }}></div>
        )
      } else {
        hourRows.push(
          <div className="last hour-row" key={i}>
            <p className="hour-mark">{String(hourMarks[i]) + ":00"}</p>
          </div>
        ),
        hourRows.push(
          <div className="hour-event-area" key={i + "-area"} style={{
            gridRow: i + 1
          }}></div>
        )
      }
    }
    return (
      <div className="events-block">
        <h1>Calendar App</h1>
        <div className="hours-back">
          {hourRows}
            <div id="events-list-container">
            {(ready)?
                <UserEvents/>
                  : <span>Please wait</span>
              }
              </div>
        </div>
      </div>
    );
  }
}
