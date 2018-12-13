import React from "react";
import VoteSection from "./VoteSection";
import "../css/CommentCard.css";
import DeleteButton from "./DeleteButton";

const CommentCard = ({ comment, article_id, user, optDeleteComment }) => {
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
      {user.username === author && (
        <DeleteButton
          comment_id={comment_id}
          optDeleteComment={optDeleteComment}
        />
      )}
    </div>
  );
};

export default CommentCard;
