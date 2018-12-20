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
    console.log(articles);
    return (
      <div className="articlesDiv">
        <QueryButtons
          // addQueries={this.addQueries}
          updateSearchQueries={this.updateSearchQueries}
          resetPage={this.props.resetPage}
        />
        <ul>
          {articles.map((article, index) => {
            if (article.article_id === 41) console.log("this is 41!");
            else console.log("rendering ", article.article_id);
            return (
              <li key={`${article.article_id}`} className="article">
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
    console.log("is mounting");
    if (this.props.page !== 1) this.props.resetPage();
    else this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page && this.props.page !== null) {
      console.log("page update");
      this.fetchArticles();
    }
    if (
      prevState.searchQueries !== this.state.searchQueries ||
      prevProps.topic !== this.props.topic
    ) {
      console.log("in search or topic update");
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
    console.log("fetching", page);
    api
      .getArticles(
        topic,
        searchQueries.sort_by,
        searchQueries.sort_ascending,
        page
      )
      .then(articles =>
        // console.log(articles) ||
        this.setState(
          prevState => {
            if (page === 1) {
              // console.log("line 87");
              return { articles, isLoading: false };
            } else {
              // console.log("line 90");

              // console.log([...prevState.articles, ...articles]);
              return {
                articles: [...prevState.articles, ...articles],
                isLoading: false
              };
            }
          },
          () => {
            // console.log(this.state);
          }
        )
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
