import React from "react";
import "../App.css";

const DeleteButton = ({ optDeleteFunc, comment_id }) => {
  return (
    <>
      <button
        className="deleteButton"
        onClick={() => optDeleteFunc(comment_id)}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
