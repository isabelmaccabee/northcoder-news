import React, { Component } from "react";
import * as api from "../api";

class Login extends Component {
  state = {
    userInput: "jessjelly",
    userNotExist: false
  };

  render() {
    const { userInput, userNotExist } = this.state;
    return (
      <div className="loginForm">
        <p>Welcome</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="userInput">Username: </label>
          <input
            type="text"
            id="userInput"
            onChange={this.handleChange}
            value={userInput}
            autoFocus={true}
            spellCheck={false}
          />
          <button>Login</button>
        </form>
        {userNotExist && (
          <p className="incorrectUser">Username doesn't exist!</p>
        )}
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .getUserDetails(this.state.userInput)
      .then(response => {
        this.props.setUser(response);
      })
      .catch(err => this.setState({ userNotExist: true }));
  };
}

export default Login;
