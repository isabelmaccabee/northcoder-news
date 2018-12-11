import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import "../css/Articles.css";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>...</p>;
    return (
      <div>
        <ul>
          {articles.map(article => (
            <li key={article.article_id} className="article">
              <ArticleCard articleInfo={article} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticles(this.props.topic);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles(this.props.topic);
    }
  }

  fetchArticles = topic => {
    api
      .getArticles(topic)
      .then(articles => this.setState({ articles, isLoading: false }));
  };
}

export default Articles;
