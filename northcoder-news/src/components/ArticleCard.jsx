import React from "react";
import "../css/ArticleCard.css";
import { Link } from "@reach/router";
import VoteSection from "./VoteSection";
import * as utils from "../utils/";

const ArticleCard = ({ articleInfo }) => {
  const { title, author, topic, votes, article_id, created_at } = articleInfo;
  return (
    <div className="articleCardDiv">
      <div className="articleInfo">
        <h3>
          <Link to={`/${topic}/${article_id}`}>{title}</Link>
        </h3>
        <p>
          <strong>Article id: {article_id}</strong>
        </p>
        <p>
          By {author}, {utils.formatDate(created_at, "articles")}
        </p>
        <p>Topic: {topic}</p>
      </div>
      <div className="votes">
        <VoteSection article_id={article_id} votes={votes} type="articles" />
      </div>
    </div>
  );
};

export default ArticleCard;
