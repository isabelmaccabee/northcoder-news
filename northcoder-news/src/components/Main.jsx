import { Router } from "@reach/router";
import Home from "./Home";
import Topic from "./Topic";
import Article from "./Article";
import ArticleAdder from "./ArticleAdder";
import throttle from "lodash.throttle";
import React, { Component } from "react";

class Main extends Component {
  state = {
    page: 1
  };

  render() {
    const { user, topics } = this.props;
    return (
      <Router className="main" onScroll={throttle(this.handleScroll, 2000)}>
        <Home path="/" />
        <Topic path="/:topic" />
        <Article path="/:topic/:article_id" user={user} />
        <ArticleAdder path="/submit-article" user={user} topics={topics} />
      </Router>
    );
  }

  handleScroll = event => {
    // if (
    //   window.innerHeight + window.scrollY >=
    //   document.body.offsetHeight - 500
    // ) {
    //   console.log("will do another api request");
    // }
    // event.persist();
    //the below things work but gives error ebcause scroll is 'null' sometimes??
    // console.log(event.target.clientHeight);
    // const bottom = this.scrollHeight - this.scrollTop === this.clientHeight;
    // if (bottom) {
    //   console.log("at the bottom");
    // }
  };
}

export default Main;
