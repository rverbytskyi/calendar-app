import { connect } from 'react-redux';

import {createUser, logIn} from './../actions/actions.js';

import SignUp from './../components/SignUp.js';

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (userId,username) => {
      dispatch(createUser(userId,username))
    },
    logIn: (userId,username) => {
      dispatch(logIn(userId,username))
    }
  }
}

const User = connect(mapStateToProps,mapDispatchToProps)(SignUp)

export default User
