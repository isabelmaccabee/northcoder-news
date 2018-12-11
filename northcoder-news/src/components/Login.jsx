import React, { Component } from "react";

class Login extends Component {
  state = {
    userInput: ""
  };

  render() {
    const { userInput } = this.state;
    return (
      <>
        <p>Welcome</p>
        <form onSubmit={this.handleSubmit} className="loginForm">
          <label htmlFor="userInput">Username: </label>
          <input
            type="text"
            id="userInput"
            onChange={this.handleChange}
            value={userInput}
          />
          <button>Login</button>
        </form>
      </>
    );
  }

  handleChange = event => {
    event.preventDefault();
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setUser(this.state.userInput);
  };
}

export default Login;
