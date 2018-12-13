import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import "../css/Articles.css";
import QueryButtons from "./QueryButtons";
import throttle from "lodash.throttle";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>...</p>;
    return (
      <div onScroll={throttle(this.handleScroll, 2000)}>
        <QueryButtons
          addQueries={this.addQueries}
          fetchArticles={this.fetchArticles}
          topic={this.props.topic}
        />
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles(this.props.topic);
    }
  }

  fetchArticles = (topic, sort_by, sort_ascending) => {
    api
      .getArticles(topic, sort_by, sort_ascending)
      .then(articles => this.setState({ articles, isLoading: false }));
  };

  handleScroll = event => {
    // const bottom =
    //   event.target.scrollHeight - event.target.scrollTop ===
    //   event.target.clientHeight;
    // if (bottom) console.log("hi");
  };
}

export default Articles;
