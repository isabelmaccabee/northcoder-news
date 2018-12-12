import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import "../css/Articles.css";
import QueryButtons from "./QueryButtons";

class Articles extends Component {
  state = {
    articles: [],
    queries: { sort_by: "" },
    isLoading: true
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>...</p>;
    return (
      <div>
        <QueryButtons addQueries={this.addQueries} />
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

  addQueries = queries => {
    this.setState({ queries });
  };
}

export default Articles;
