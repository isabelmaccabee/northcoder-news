import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Topic from "./Topic";
import Article from "./Article";

const Main = () => {
  return (
    <Router className="main">
      <Home path="/" />
      <Topic path="/:topic" />
      <Article path="/:topic/:article_id" />
    </Router>
  );
};

export default Main;
