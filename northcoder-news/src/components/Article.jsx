import React, { Component } from "react";
import * as api from "../api";
import VoteSection from "./VoteSection";
import "../css/Article.css";
import DeleteButton from "./DeleteButton";

class Article extends Component {
  state = {
    currentArticle: {},
    isLoading: true,
    deleted: false
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
      isLoading,
      deleted
    } = this.state;
    const { username } = this.props.user;
    if (isLoading) return <p>...</p>;
    return (
      <div className={deleted ? "articlePage hidden" : "articlePage"}>
        <h2>{title}</h2>
        <h3>
          <span>{author}</span>
          <br />
          <span>{created_at}</span>
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
      .then(response => {
        console.log("yes deleted yay");
      })
      .catch(err => {
        console.log("oops an errr");
      });
    this.setState({ deleted: true });
  };
}

export default Article;
