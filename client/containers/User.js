import { connect } from 'react-redux';

import {createUser} from './../actions/actions.js';

import SignUp from './../components/SignUp.js';


const mapDispatchToProps = dispatch => {
  return {
    createUser: (username) => {
      dispatch(createUser(username))
    }
  }
}

const User = connect(null,mapDispatchToProps)(SignUp)

export default User
