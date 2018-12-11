import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import "../css/TopTenSidebar.css";

class TopTenSidebar extends Component {
  state = {
    top10: [],
    isLoading: true
  };

  render() {
    const { isLoading, top10 } = this.state;
    if (isLoading) return <p>...</p>;
    return (
      <div>
        <h2>Top 10 Popular Articles</h2>
        <ol>
          {top10.map(({ title, article_id, votes, topic }) => {
            return (
              <li key={article_id}>
                <Link to={`/${topic}/${article_id}`}>{title}</Link>, votes:{" "}
                {votes}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopTen();
  }

  fetchTopTen = () => {
    api.getTopTen().then(ranking => {
      return this.setState({ top10: ranking, isLoading: false });
    });
  };
}

export default TopTenSidebar;
