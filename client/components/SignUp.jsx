import React from 'react';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
    }

    handleUsernameChange(e){
        this.setState({ username: e.target.value})
    }

    handleAddUser(e){
        e.preventDefault();
        this.props.onAddUser(this.state);
        this.setState({
            username: "",
        });
    }

    render() {
        const {username} = this.state;
        const isEnabled = username.length > 0;
        return (
            <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signupModalLabel">Please create user</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                  <form onSubmit={this.handleAddUser.bind(this)}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        ref="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}
                        required
                    />
                </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                <button type="button" className="btn btn-primary" disabled={!isEnabled} onClick={this.handleAddUser.bind(this)} >Add</button>
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default Signup;
