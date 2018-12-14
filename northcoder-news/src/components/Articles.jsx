import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import "../css/Articles.css";
import QueryButtons from "./QueryButtons";
import { navigate } from "@reach/router";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    endOfPage: false
  };

  render() {
    const { articles, isLoading, endOfPage } = this.state;
    if (isLoading) return <p>...</p>;
    return (
      <div className="articlesDiv">
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
        {endOfPage && <p>end of page</p>}
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
    if (prevProps.page !== this.props.page) {
      this.fetchArticles(this.props.topic, null, null, this.props.page);
    }
  }

  fetchArticles = (topic, sort_by, sort_ascending, page) => {
    api
      .getArticles(topic, sort_by, sort_ascending, page)
      .then(articles =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          isLoading: false
        }))
      )
      .catch(err => {
        if (page > 1) {
          this.setState({ endOfPage: true });
        } else {
          navigate("/404", {
            state: { errMsg: err.response.data.message },
            replace: true
          });
        }
      });
  };
}

export default Articles;
