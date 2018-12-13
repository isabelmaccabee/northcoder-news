import React, { Component } from "react";
import * as api from "../api";
import VoteSection from "./VoteSection";
import "../css/Article.css";
import DeleteButton from "./DeleteButton";
import { navigate } from "@reach/router";
import { withAlert } from "react-alert";

class Article extends Component {
  state = {
    currentArticle: {},
    isLoading: true
  };
  render() {
    const {
      currentArticle: {
        title,
        votes,
        author,
        created_at,
        // topic,
        body,
        comment_count,
        article_id
      },
      isLoading
    } = this.state;
    const { username } = this.props.user;
    if (isLoading) return <p>...</p>;
    return (
      <div className="articlePage">
        <h2 className="articleTitle">{title}</h2>
        <h3>
          <span>Author: {author}</span>
          <br />
          <span>Creation date: {created_at}</span>
          <br />
          <span>Comment count: {comment_count}</span>
        </h3>
        <p>{body}</p>
        <VoteSection votes={votes} article_id={article_id} />
        {username === author && (
          <DeleteButton optDeleteFunc={this.optDeleteArticle} />
        )}
      </div>
    );
  }

  componentDidMount() {
    this.fetchOneArticle();
  }

  fetchOneArticle = () => {
    api.getOneArticle(this.props.article_id).then(article => {
      this.setState({ currentArticle: article, isLoading: false });
    });
  };

  optDeleteArticle = () => {
    api
      .deleteElement(this.props.article_id)
      .then(() => {
        this.props.alert.success("Successful delete!");
        navigate("/");
      })
      .catch(err => {
        this.props.alert.error(
          "Unsuccessful delete, refresh and try again maybe?"
        );
      });
    this.setState({ deleted: true });
  };
}

export default withAlert(Article);
