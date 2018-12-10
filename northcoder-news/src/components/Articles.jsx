import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        <ul>
          {articles.map(article => (
            <li key={article.article_id}>
              <ArticleCard articleInfo={article} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles().then(articles => this.setState({ articles }));
  };
}

export default Articles;
