import React, { Component } from "react";
import * as api from "../api";
import VoteSection from "./VoteSection";

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
    if (isLoading) return <p>...</p>;
    return (
      <div>
        <h2>{title}</h2>
        <h3>
          <span>{author}</span>
          <br />
          <span>{created_at}</span>
          <br />
          <span>{comment_count}</span>
        </h3>
        <p>{body}</p>
        <VoteSection votes={votes} component_id={article_id} />
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
}

export default Article;
