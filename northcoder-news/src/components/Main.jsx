import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Topic from "./Topic";
import Article from "./Article";
import ArticleAdder from "./ArticleAdder";
import throttle from "lodash.throttle";

const Main = ({ user, topics }) => {
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      console.log("will do another api request");
    }
  };

  return (
    <Router className="main" onScroll={throttle(handleScroll, 2000)}>
      <Home path="/" />
      <Topic path="/:topic" />
      <Article path="/:topic/:article_id" user={user} />
      <ArticleAdder path="/submit-article" user={user} topics={topics} />
    </Router>
  );
};

export default Main;
