import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

class CommentsSidebar extends Component {
  state = { currentComments: [], isLoading: true, newComment: "" };
  render() {
    const { currentComments } = this.state;
    const { article_id, user } = this.props;
    return (
      <div>
        <h2>Comments</h2>
        <CommentAdder
          user={user}
          addComment={this.addComment}
          article_id={article_id}
        />
        {currentComments.map(comment => {
          return (
            <div key={comment.comment_id}>
              <CommentCard comment={comment} article_id={article_id} />
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.newComment !== this.state.newComment) {
      this.fetchComments();
    }
  }

  fetchComments = () => {
    api.getComments(this.props.article_id).then(comments => {
      this.setState({ currentComments: comments, isLoading: false });
    });
  };

  addComment = newComment => {
    this.setState({ newComment });
  };
}

export default CommentsSidebar;
