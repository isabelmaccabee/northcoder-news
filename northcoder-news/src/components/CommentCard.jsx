import React from "react";
import VoteSection from "./VoteSection";
import "../css/CommentCard.css";

const CommentCard = ({ comment, article_id }) => {
  const { comment_id, author, body, votes, created_at, failedToPost } = comment;
  return (
    <div
      key={comment_id}
      className={failedToPost ? "failedPost" : "successfulPost"}
    >
      <h4>Author: {author}</h4>
      <p>Comment: {body}</p>
      <p>Created at: {created_at.slice(0, 10)}</p>
      <VoteSection
        votes={votes}
        comment_id={comment_id}
        article_id={article_id}
      />
    </div>
  );
};

export default CommentCard;
