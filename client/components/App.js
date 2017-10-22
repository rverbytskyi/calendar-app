import React from 'react';

import Header from './Header.js';
import CalendarBack from './CalendarBack.js';

import css from './../css/App.css';

export default class App extends React.Component{
  render(){
    return(
      <div className="app-container">
        <Header />
        <div className="container">
          <CalendarBack />
        </div>
      </div>
    )
  }
}
