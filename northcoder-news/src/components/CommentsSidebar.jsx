import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

// need to 'push' (but not really bc dont want to modify) to currentComments
// this will render automatically
// so push comment with 'fake' comment obj (i.e. guess id, set votes to 0)
// next time it'll be the real object

class CommentsSidebar extends Component {
  state = { currentComments: [], isLoading: true };
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
          showPostFailure={this.showPostFailure}
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

  fetchComments = () => {
    api.getComments(this.props.article_id).then(comments => {
      this.setState({ currentComments: comments, isLoading: false });
    });
  };

  addComment = (newComment, username) => {
    const postCommentObj = {
      body: newComment,
      author: username,
      created_at: `${Date.now()}`,
      votes: 0,
      comment_id: `${Date.now()}`,
      failedToPost: false
    };
    this.setState(prevState => ({
      currentComments: [postCommentObj, ...prevState.currentComments],
      isLoading: false
    }));
  };

  showPostFailure = () => {
    this.setState(prevState => ({
      ...prevState,
      currentComments: [
        { ...prevState.currentComments[0], failedToPost: true },
        ...prevState.currentComments.slice(1)
      ]
    }));
  };
}

export default CommentsSidebar;
