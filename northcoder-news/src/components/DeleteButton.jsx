import React from "react";

const DeleteButton = ({ author, currentUser }) => {
  return <>{currentUser.username === author && <button>Delete</button>}</>;
};

export default DeleteButton;
