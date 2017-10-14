import React from 'react';
import PropTypes from 'prop-types';

const SignUp = ({createUser}) => {

  let username

  const enableButton = () => {
    if (username.value.length > 0) {
      //document.getElementById("enter-username-btn").disabled = false
      document.getElementById("enter-username-btn").childNodes[0].nodeValue = "Log in as "+username.value
    }
  }

  const handleAddUser = (e) => {
    e.preventDefault()
    createUser(username.value)
    console.log(username.value);
    username.value = ""
  }

  const handleChange = (e) => {
    if (!(/^[0-9a-zA-Z ]{0,32}$/.test(e.target.value))) {
      e.target.value = e.target.value.slice(0, -1);
    }
    enableButton()
  }

  return (
    <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Please create user</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

            <div className="modal-body">
              <form onSubmit={handleAddUser.bind(this)}>
              <div className="form-group">
                <input className="form-control" type="text" ref="username" placeholder="Please enter username" ref={inp => {
                  username = inp
                }} onChange={handleChange.bind(this)} required/>
              </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" id="enter-username-btn" onClick={handleAddUser.bind(this)}>Enter username</button>
            </div>
        </div>
      </div>
    </div>
  )
}

SignUp.propTypes = {
  createUser: PropTypes.func.isRequired
}

export default SignUp;
