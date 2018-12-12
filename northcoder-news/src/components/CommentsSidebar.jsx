import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";

class CommentsSidebar extends Component {
  state = { currentComments: [], isLoading: true };
  render() {
    const { currentComments } = this.state;
    return (
      <div>
        <h2>Comments</h2>
        {currentComments.map(comment => {
          return (
            <div key={comment.comment_id}>
              <CommentCard comment={comment} />
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    api.getComments(this.props.article_id).then(comments => {
      this.setState({ currentComments: comments, isLoading: false });
    });
  };
}

export default CommentsSidebar;
