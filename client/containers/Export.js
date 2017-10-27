import React from 'react';
import {connect} from 'react-redux';

import {apiPrefix} from './../../etc/config.json';

let Export = (state) => {
  return (
    <i className="material-icons"><a href={`${apiPrefix}/events/export/${state.user.id}`}>&#xE2C6;</a></i>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

Export = connect(mapStateToProps)(Export)

export default Export
