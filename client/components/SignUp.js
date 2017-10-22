import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

const SignUp = ({user,users,createUser,logIn,logOut}) => {

  let username

  const currentUser = () => {
    if ((user==={})||(user===undefined)){
      return "Please enter your name"
    } else {
      return "You're logged in as " + user.username
    }
  }

  const enableButton = () => {
    if (username.value.length > 0) {
      document.getElementById("enter-username-btn").childNodes[0].nodeValue = "Log in as "+ username.value
    } else {
      document.getElementById("enter-username-btn").childNodes[0].nodeValue = "Enter username"
    }
  }

  const handleAddUser = (e) => {
    e.preventDefault()
    let id
    users.find((el)=>{
      if (el.username === username.value){
        id = el.id
      }
    })
    if (id){
      logIn(id,username.value)
    }else{
      id = v4()
      createUser(id, username.value)
      logIn(id,username.value)
    }

    username.value = ""
    enableButton()
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
            <h5 className="modal-title">{currentUser()}</h5>
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
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string
    }).isRequired
  ).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string
  }).isRequired,
  createUser: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired
}

export default SignUp;
