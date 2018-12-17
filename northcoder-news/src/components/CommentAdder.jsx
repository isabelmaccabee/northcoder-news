import React, { Component } from "react";
import * as api from "../api";

class CommentAdder extends Component {
  state = {
    comment: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Thoughts about this article? Post a comment!</label>
        <input
          type="text"
          onChange={this.handleChange}
          id="comment"
          value={this.state.comment}
        />
        <button>
          Post comment as <strong>{this.props.user.username}</strong>
        </button>
      </form>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const {
      article_id,
      user: { user_id, username },
      showPostFailure
    } = this.props;
    api.postComment(article_id, this.state.comment, user_id).catch(err => {
      showPostFailure();
    });
    this.props.addComment(this.state.comment, username);
  };
}

export default CommentAdder;
