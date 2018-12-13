import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Topic from "./Topic";
import Article from "./Article";
import ArticleAdder from "./ArticleAdder";

const Main = ({ user, topics }) => {
  return (
    <Router className="main">
      <Home path="/" />
      <Topic path="/:topic" />
      <Article path="/:topic/:article_id" user={user} />
      <ArticleAdder path="/submit-article" user={user} topics={topics} />
    </Router>
  );
};

export default Main;
