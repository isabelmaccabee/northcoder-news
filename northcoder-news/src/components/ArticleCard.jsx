import React from "react";
import PropTypes from "prop-types";
import "../css/ArticleCard.css";
import { Link } from "@reach/router";
import VoteSection from "./VoteSection";

const ArticleCard = ({ articleInfo }) => {
  const { title, author, topic, votes, article_id } = articleInfo;
  return (
    <div className="articleCardDiv">
      <div className="articleInfo">
        <h3>
          <Link to={`/${topic}/${article_id}`}>{title}</Link>
        </h3>
        <p>Author: {author}</p>
        <p>Topic: {topic}</p>
      </div>
      <div className="votes">
        <VoteSection article_id={article_id} votes={votes} type="articles" />
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  articleInfo: PropTypes.object
};

export default ArticleCard;
