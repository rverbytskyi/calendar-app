import React from 'react';

import css from './../css/CalendarBack.css';

export default class CalendarBack extends React.Component{
    render() {
        var hourRows = [];
        for (var i = 8; i <= 17; i++) {
            if (i<=12){
                var hour = i;
            } else {
                var hour = i-12;
            }
            hourRows.push(
                <div className="hour-row" key={i}>
                    <div className="hour-marks-col">
                        <p className="hour-mark">{hour+":00"}</p>
                        <p className="half-hour-mark">{hour+":30"}</p>
                    </div>
                    <div className="hour-event-area"></div>
                </div>
            );
        }
        return (
            <div className="hours-back">
                {hourRows}
            </div>
        );
    }
}
