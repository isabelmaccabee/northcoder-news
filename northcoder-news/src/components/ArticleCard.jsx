import React from "react";
import PropTypes from "prop-types";
import "../css/ArticleCard.css";
import { Link } from "@reach/router";

const ArticleCard = ({ articleInfo }) => {
  const { title, author, topic, votes, article_id } = articleInfo;
  return (
    <div className="articleCardDiv">
      <h3>
        <Link to={`/${topic}/${article_id}`}>{title}</Link>
      </h3>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      <p>Votes: {votes}</p>
    </div>
  );
};

ArticleCard.propTypes = {
  articleInfo: PropTypes.object
};

export default ArticleCard;
