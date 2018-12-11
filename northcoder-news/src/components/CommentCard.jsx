import React from "react";

const CommentCard = ({ comment }) => {
  const { comment_id, author, body, votes, created_at } = comment;
  return (
    <div key={comment_id}>
      <h4>Author: {author}</h4>
      <p>Comment: {body}</p>
      <p>Votes: {votes}</p>
      <p>Created at: {created_at.slice(0, 10)}</p>
    </div>
  );
};

export default CommentCard;
