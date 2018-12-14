import { Router } from "@reach/router";
import Home from "./Home";
import Topic from "./Topic";
import Article from "./Article";
import ArticleAdder from "./ArticleAdder";
import throttle from "lodash.throttle";
import React, { Component } from "react";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile";
import TopicAdder from "./TopicAdder";

class Main extends Component {
  state = {
    page: 1
  };

  render() {
    const { user, topics } = this.props;
    const { page } = this.state;
    return (
      <Router className="main" onScroll={e => this.handleScroll(e.target)}>
        <Home path="/" page={page} />
        <Topic path="/:topic" page={page} />
        <Article path="/:topic/:article_id" user={user} />
        <ArticleAdder path="/submit-article" user={user} topics={topics} />
        <PageNotFound path="/404" />
        <Profile path="/profile" user={user} />
        <TopicAdder path="/submit-topic" user={user} />
      </Router>
    );
  }

  handleScroll = throttle(target => {
    const bottom =
      target.scrollHeight - target.scrollTop === target.clientHeight;
    if (bottom) {
      console.log("at the bottom");
      this.setState(prevState => ({ page: prevState.page + 1 }));
    }
  }, 1000);
}

export default Main;
