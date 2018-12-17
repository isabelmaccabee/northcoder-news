import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import "../css/Articles.css";
import QueryButtons from "./QueryButtons";
import { navigate } from "@reach/router";

class Articles extends Component {
  state = {
    articles: [],
    searchQueries: { sort_by: null, sort_ascending: null },
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
          page={this.props.page}
          updateSearchQueries={this.updateSearchQueries}
          resetPage={this.props.resetPage}
        />
        <ul>
          {articles.map((article, index) => {
            return (
              <li key={`${article.article_id}${index}`} className="article">
                <ArticleCard articleInfo={article} />
              </li>
            );
          })}
        </ul>
        {endOfPage && <p>end of page</p>}
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.setState({ articles: [] }, () => {
        this.fetchArticles();
      });
    }
    if (prevProps.page !== this.props.page) {
      this.fetchArticles();
    }
    if (prevState.searchQueries !== this.state.searchQueries) {
      if (this.props.page === 1) {
        this.setState({ articles: [] }, () => {
          this.fetchArticles();
        });
      } else {
        this.props.resetPage();
      }
    }
  }

  fetchArticles = () => {
    const { topic, page } = this.props;
    const { searchQueries } = this.state;
    api
      .getArticles(
        topic,
        searchQueries.sort_by,
        searchQueries.sort_ascending,
        page
      )
      .then(articles =>
        this.setState(prevState => {
          if (page === 1) {
            return { articles, isLoading: false };
          } else {
            return {
              articles: [...prevState.articles, ...articles],
              isLoading: false
            };
          }
        })
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

  updateSearchQueries = (sort_by, sort_ascending) => {
    this.setState({ searchQueries: { sort_by, sort_ascending } });
  };
}

export default Articles;
