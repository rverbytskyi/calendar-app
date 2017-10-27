import React from 'react';
import {connect} from 'redux';
import PropTypes from 'prop-types';

import Header from './../components/Header.js';
import CalendarBack from './../components/CalendarBack.js';

import css from './../css/App.css';

export class App extends React.Component{
  componentDidMount() {
    console.log();
  }
  render(){
    let { events, user, loadEvents } = this.props
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

const mapStateToProps = state => {
  return {
    events : state.events,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadEvents: (userId) => {
      dispatch(loadEvents(userId))
    }
  }
}

// App.propTypes = {
//   loadEvents: PropTypes.func,
//   user: PropTypes.shape({
//     id: PropTypes.string,
//     username: PropTypes.string
//   }).isRequired,
// }

//App = connect()(App)

export default connect(null,null)(App);
