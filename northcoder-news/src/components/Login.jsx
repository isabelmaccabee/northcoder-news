import React, { Component } from "react";

class Login extends Component {
  state = {
    userInput: ""
  };

  render() {
    const { userInput } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="userInput">Please write in here</label>
          <input
            type="text"
            id="userInput"
            onChange={this.handleChange}
            value={userInput}
          />
          <button>Login</button>
        </form>
      </div>
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
