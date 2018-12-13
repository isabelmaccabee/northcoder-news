import React from "react";
import "../App.css";
import { withAlert } from "react-alert";

const DeleteButton = ({ comment_id, optDeleteComment }) => {
  return (
    <>
      <button
        className="deleteButton"
        onClick={() => optDeleteComment(comment_id)}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
