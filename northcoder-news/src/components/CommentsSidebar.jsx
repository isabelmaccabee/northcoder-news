import React, { Component } from "react";

class CommentsSidebar extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.article_id}</p>
      </div>
    );
  }
}

export default CommentsSidebar;
