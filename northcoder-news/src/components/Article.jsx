import React, { Component } from "react";
import * as api from "../api";

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
        topic,
        body,
        comment_count
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
        </h3>
        <p>{body}</p>
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
