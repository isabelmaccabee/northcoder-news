import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import { withAlert } from "react-alert";

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
              <CommentCard
                comment={comment}
                article_id={article_id}
                user={user}
                optDeleteComment={this.optDeleteComment}
              />
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
    api
      .getComments(this.props.article_id)
      .then(comments => {
        this.setState({ currentComments: comments, isLoading: false });
      })
      .catch(err => {});
  };

  addComment = (newComment, username) => {
    const postCommentObj = {
      body: newComment,
      author: username,
      created_at: `${Date.now()}`,
      votes: 0,
      comment_id: `newComment`,
      failedToPost: false
    };
    this.setState(prevState => ({
      currentComments: [postCommentObj, ...prevState.currentComments],
      isLoading: false
    }));
  };

  showPostFailure = () => {
    this.setState(prevState => {
      this.props.alert.error("Oh no! Unsucessful post, refresh and try again?");
      return {
        ...prevState,
        currentComments: [
          { ...prevState.currentComments[0], failedToPost: true },
          ...prevState.currentComments.slice(1)
        ]
      };
    });
  };

  optDeleteComment = comment_id => {
    api
      .deleteElement(this.props.article_id, comment_id)
      .then(() => {
        // this.props.alert.success("Successful comment post!");
      })
      .catch(err => {
        this.props.alert.error(
          "Oh no! Delete wasn't successful, refresh and try again maybe?"
        );
      });
    this.setState(prevState => {
      const filteredComments = prevState.currentComments.filter(
        comment => comment.comment_id !== comment_id
      );
      return {
        ...prevState,
        currentComments: filteredComments
      };
    });
  };
}

export default withAlert(CommentsSidebar);
