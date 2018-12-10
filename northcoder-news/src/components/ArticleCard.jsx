import React from "react";
import PropTypes from "prop-types";
import "../css/ArticleCard.css";

const ArticleCard = ({ articleInfo }) => {
  const { title, author, topic, votes } = articleInfo;
  return (
    <div className="articleCardDiv">
      <h3>{title}</h3>
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
