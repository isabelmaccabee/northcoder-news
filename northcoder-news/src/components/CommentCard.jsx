import React from "react";
import VoteSection from "./VoteSection";
import "../css/CommentCard.css";
import DeleteButton from "./DeleteButton";

const CommentCard = ({ comment, article_id, user, optDeleteComment }) => {
  const { comment_id, author, body, votes, created_at, failedToPost } = comment;
  return (
    <div
      key={comment_id}
      className={
        failedToPost ? "failedPost commentCard" : "successfulPost commentCard"
      }
    >
      <p>By {author}</p>
      <p>Comment: {body}</p>
      <p>
        Created at:{" "}
        {comment_id === "newComment" ? "Just now" : created_at.slice(0, 10)}
      </p>
      <VoteSection
        votes={votes}
        comment_id={comment_id}
        article_id={article_id}
      />
      {user.username === author && comment_id !== "newComment" && (
        <DeleteButton
          comment_id={comment_id}
          optDeleteFunc={optDeleteComment}
        />
      )}
    </div>
  );
};

export default CommentCard;
