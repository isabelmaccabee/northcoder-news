import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";

class CommentsSidebar extends Component {
  state = { currentComments: [], isLoading: true };
  render() {
    const { currentComments } = this.state;
    return (
      <div>
        <p>{this.props.article_id}</p>
        <ul>
          {currentComments.map(
            ({ comment_id, author, body, created_at, votes }) => {
              return <li>{/* <CommentCard /> */}</li>;
            }
          )}
        </ul>
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
